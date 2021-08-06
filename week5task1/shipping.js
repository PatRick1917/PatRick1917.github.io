"use strict";
/*
Zachary Zubiate

Lab 05, Task 01

This program calculates the shipping costs for a inputed weight in KG 
*/

function calc() {

//get the weight from the textbox
    let weight = parseFloat(document.getElementById("weight").value);
    console.log(weight);

    //validate, if it is 0 or less then alert an error message
    if (isNaN(weight) || weight < 0) {
        //if determined to be negative or not a number
        console.log("invalid");
        alert("invalid input");
    }
    else {
    //if good, use nested if statements to determine cost per kg
    let shippingRate;
    if (weight < 2.5) {
        shippingRate = 3.5;
    }
    else if (weight < 5) {
        shippingRate = 2.85;
    }
    else {
        shippingRate = 2.45;
    }
    console.log("Shipping Rate is " + shippingRate)
    //calculate total
    let shippingCost = shippingRate * weight;
    console.log("Shipping cost is " + shippingCost);

    //display results in the div on the page as shown below:
    let reciept = "Cost is $ " + shippingRate.toFixed(2) + " per kg<br><br>Total charge is $ " + shippingCost.toFixed(2);
    console.log(reciept);
    document.getElementById("receipt").innerHTML = reciept;
    }
}