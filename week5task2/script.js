"use strict";
/*
Zachary Zubiate

Lab 05, Task 02

this program calculates Body Mass Index based on inputted height and weight values 
*/

function calcBMI(){

    //get height in feet, height in inches, weight from form and store in 3 variables feet, inches, weight
    let feet = parseInt(document.getElementById("heightFeet").value);
    let inches = parseInt(document.getElementById("heightInches").value);
    let weight = parseInt(document.getElementById("weightPounds").value);

    //make sure all inputs are present and valid, alert message if not
    if (isNaN(weight) || isNaN(inches) || isNaN(feet) || weight < 0 || inches < 0 || feet < 0) {
        alert("input is invalid");
    }
    else {
    //convert height in feet and inches to total inches and store in another variable height
    let height = parseInt((feet * 12) + inches);
    console.log("Height in inches: " + height);
    console.log("Weight in pounds is: " + weight)

    //calculate bmi using the formula, store in a variable called bmi
    let bmi = parseInt((weight * 703) / (height ** 2));
    console.log("Calculated BMI: " + bmi)

    //use nested if statements to determine category based on bmi
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }
    console.log("BMI Category: " + category);
    //display bmi on the html page with 2 decimal places
    let bmiResultString = "<h3>BMI: " + bmi.toFixed(2) + "</h3>";
    document.getElementById("bmiValueResults").innerHTML = bmiResultString;

    //display category on the page
    let bmiCategoryString = "<h3>Category: " + category + "</h3>";
    document.getElementById("bmiCategoryResults").innerHTML = bmiCategoryString;
    }
}

function reset() {
    //clear values for BMI
    document.getElementById("bmiValueResults").innerHTML = "BMI: ";
    //clear values for Category
    document.getElementById("bmiCategoryResults").innerHTML = "Category: ";
}