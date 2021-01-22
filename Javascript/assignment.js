// kilometer to meter
function kilometerToMeter(value) {
    if (value >= 0) {
        var distance = value * 1000;
        return (distance + " meter");
    }
    else {
        return "Distance cann't be negative";
    }
}
var result = kilometerToMeter(10);
console.log(result);

