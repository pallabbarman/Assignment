// kilometer to meter 

function kilometerToMeter(value) {
    if (value >= 0) {
        var distance = value * 1000;
        return distance;
    }
    else {
        return "Distance can't be negative";
    }
}
var meter = kilometerToMeter(10);
console.log(meter);

// budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var totalProductsCost = (watch * 50) + (mobile * 100) + (laptop * 500);
        return totalProductsCost;
    }
    else {
        return "Price can't be negative";
    }
}
var numberOfProducts = budgetCalculator(10, 5, 2);
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
        return "Day's can't be negative or zero";
    }
}
var totalRent = hotelCost(21);
console.log(totalRent);

// mega friend

function megaFriend(names) {
    if (names.length === 0) {
        return "Empty array or invalid character or numbers";
    }
    for (var i = 0; i < names.length; i++) {
        if (typeof names[i] !== "string") {
            return "Empty array or invalid character or numbers";
        }
    }
    var largestName = "";
    for (let i = 0; i < names.length; i++) {
        if (largestName.length < names[i].length) {
            largestName = names[i];
        }
    }
    return largestName;
}
var friendsName = megaFriend(["Pallab", "Pallabi", "Sabbir", "Archana", "Snake", "Sajib", "Naimur"]);
console.log(friendsName);