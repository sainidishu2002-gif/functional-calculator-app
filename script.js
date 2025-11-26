// Simple Interest Calculator
  function calculateInterest() {
    var principal = Number(document.querySelector("#principal").value);
    var rate = Number(document.querySelector("#rate").value);
    var time = Number(document.querySelector("#time").value);
    var result = document.querySelector("#interestResult");
    var interest = (principal * rate * time) / 100;
    var total = principal + interest;
    result.textContent = `Interest: ₹${interest} | Total Amount: ₹${total}`;
  }

  // BMI Calculator
  function calculateBMI() {
    var height = Number(document.querySelector("#height").value);
    var weight = Number(document.querySelector("#weight").value);
    var result = document.querySelector("#bmiResult");
    var bmi = weight / ((height / 100) ** 2);
    var category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }

  // Calorie Calculator
  function calculateCalories() {
    var age = Number(document.querySelector("#age").value);
    var gender = document.querySelector("#gender").value;
    var weight = Number(document.querySelector("#calWeight").value);
    var height = Number(document.querySelector("#calHeight").value);
    var activity = Number(document.querySelector("#activity").value);
    var result = document.querySelector("#calorieResult");
    var bmr;
    if (gender === "male") {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    var calories = bmr * activity;
    result.textContent = `Your daily calorie need is ${calories.toFixed(2)} kcal`;
  }