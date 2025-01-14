

12::for Loop

13:: while Loop

14::do-while loop

15::for In

16::for of




|||||||||||||||
Ternary Operators
let voteable = (age < 18) ? "Too young":"Old enough";
    age = Number(age);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }




:::::::::::::::::::::::::: event handler in loops ............
// for(let i=0; i<5; i++){

//    setTimeout(()=>{

//       console.log(i)
//    },1000*i)
// }


    |||||||Conditional Statements ||||||||||||||


if 

else

else if

  switch

    
::::Types of error in javscript ||||||||||||||||||||||||||||||||


    



The try statement defines a code block to run (to try).\

    try {
        Block of code to try
      }
      catch(err) {
        Block of code to handle errors
      }

    The catch:: statement defines a code block to handle any error.
    
    The finally:: statement defines a code block to run regardless of the result.
        try {
            Block of code to try
          }
          catch(err) {
            Block of code to handle errors
          }
          finally {
            Block of code to be executed regardless of the try / catch result
          }

        |||||||||||||||||||||||||||||||||||||||||||||
    The throw:: statement defines a custom error.
    try {
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
      }



      |||||||||||||JavaScript Popup Boxes
window.alert("sometext");

if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }

  let person = prompt("Please enter your name", "Harry Potter");
    let text;
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }

    window.setTimeout(function, milliseconds);

let one=prompt()
if(one == 18){
   console.log(one , "true19")
}else{
   console.log(false)
}
