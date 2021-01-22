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
var result = kilometerToMeter(10);
console.log(result);

// budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var totalProductCost = (watch * 50) + (mobile * 100) + (laptop * 500);
        return totalProductCost;
    }
    else {
        return "Price cann't be negative";
    }
}
var numberOfProducts = budgetCalculator(10, -8, 10);
console.log(numberOfProducts);

// hotel cost 

function hotelCost(days) {
    if (days > 0) {
        var rent = 0;
        for (var i = 1; i <= days; i++) {
            if (i >= 1 && i <= 10) {
                rent += 100;
            }
            else if (i >= 11 && i <= 20) {
                rent += 80;
            }
            else if (i > 20) {
                rent += 50;
            }
        }
        return rent;
    }
    else {
        return "Day's cann't be negative or symbol";
    }
}
var totalRent = hotelCost(21);
console.log(totalRent);
