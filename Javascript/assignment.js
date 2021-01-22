// kilometer to meter

function kilometerToMeter(value) {
    if (value >= 0) {
        var distance = value * 1000;
        return distance;
    }
    else {
        return "Distance cann't be negative";
    }
}
var result = kilometerToMeter(5);
console.log(result);

// budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var productPrice = (watch * 50) + (mobile * 100) + (laptop * 500);
        return productPrice;
    }
    else {
        return "Price cann't be negative";
    }
}
var totalPrice = budgetCalculator(10, 8, -10);
console.log(totalPrice);