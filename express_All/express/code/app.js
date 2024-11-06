const redis = require('redis');
const express = require('express');
//const fetch = require('node-fetch'); // Ensure you have the node-fetch package

const app = express();
const port = process.env.PORT || 9000;

// Create Redis client to connect to the server
let redisClient;

(async () => {
  redisClient = redis.createClient();
  
  redisClient.on('error', (error) => {
    console.error(`Redis connection error: ${error}`);
  });

  await redisClient.connect();
})();

app.get('/', async (req, res) => {
  // Fetch data from the external API without caching
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/api', async (req, res) => {
  try {
    // Check if data is in the Redis cache
    const cachedData = await redisClient.get('apiget');

    if (cachedData) {
      // If data is found in cache, send it
      return res.send(JSON.parse(cachedData));
    }

    // If data is not in cache, fetch it from the external API
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();

    // Store the data in Redis with a TTL (e.g., 3600 seconds = 1 hour)
    await redisClient.set('apiget', JSON.stringify(data), { EX: 3600 });

    // Send the data to the client
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



//Q what is in memory datastore ?

//Ans: store in Ram 

//https://redis.io/learn/develop/node/gettingstarted

//https://redis.io/learn/develop/node/node-crash-course


///docker pull redis/redis-stack:latest


 
///docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
