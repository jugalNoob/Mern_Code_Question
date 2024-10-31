const express = require('express');

const app = express();
const port = process.env.PORT || 9000;



// Home route
app.get('/', (req, res) => {
  const obj = {
    name: 'Jugal',
    age: 27,
    email: 'jugal@gmail.com'
  };
  res.json(obj);
});

// Memory usage route (returns memory usage in JSON format)
app.get('/memory', (req, res) => {
  const memoryUsage = process.memoryUsage();
  res.json({
    rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
    heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
    heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
    external: `${Math.round(memoryUsage.external / 1024 / 1024)} MB`
  });
});


// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
