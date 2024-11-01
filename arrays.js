// TASK 1
function isArrayLengthOdd(numbers) {
    if(numbers.length % 2 === 0){  //if the number of lenght divisible by 2, it mean the number of lenght is even 6/2= 3 remain is 0
        return false;
    }else{
        return true;

    }

  }
console.log(isArrayLengthOdd([1, 2, 3, 4]));

//TASK 2
array = [1,2,3,4];
function isArrayLengthEven(numbers) {
    if (numbers.length % 2 == 0){
        return true;
    }else{
        return false; 
    }

  }

console.log(isArrayLengthEven(array));


//TASK 3
teachers = ["hassan", "Mashary"];
//teacher2 =["Anwar", "Kholoud"];
function addLailaToArray(instructors){
    instructors.push("Laila");
    return instructors;
}

console.log(addLailaToArray(teachers));
//console.log(addLailaToArray(teacher2));
//console.log(addLailaToArray(['moudhi', 'ayah']));


//Task 4


 function eliminateTeam(teams) {
    const lastTeam = teams.pop();  //Removes the last element from an array and returns it. 
    return lastTeam;
}

console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));



//Challenge1



function secondHalfOfArrayIfItIsEven(fruits) {
    if(fruits.length % 2 == 0){  //if the number of length divisible by 2, it mean the number of lenght is even 6/2= 3 remain is 0
        return fruits.slice(fruits.length/2 , fruits.length); 
     }else if(fruits.length % 2 != 0){
        return [] ;
     }
   }

console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));
//console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry","watermelon"]));




// Challenge 2


function youGottaCalmDown(shout) {
    //اذا اخر حرف مو ! رجع لي الكلمة
    if (shout[shout.length - 1] !== "!"){
        return shout;        
    }
    //السلايس اوف ترجع الكلمه بعد ماتشيل الي نحدده
    //الاندكس يعطيني رقم اول علامة تعجب
    const shoutWithOneExliminationMark = shout.slice(0,shout.indexOf("!")+1);  
    return shoutWithOneExliminationMark;
}

console.log(youGottaCalmDown("Hellooo!!!!!!!"));
