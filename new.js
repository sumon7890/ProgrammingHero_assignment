// convert kilometer to meter

function kilometerToMeter(kilometer) {

    // check if parameter is negative
    if (kilometer <= 0) {
        var warning = "warning ! Number is either zero or negative";
        return warning;
    } else {
        var result = kilometer * 1000;
        return result;
    }
}



// budget calculator

function budgetCalculator(watch, phone, laptop) {

    // Define product price 
    var perWatchPrice = 50;
    var perPhonePrice = 100;
    var perLaptopPrice = 500;
    var totalPrice = 0;

    //  check if price is empty or negative 

    if ((watch <= 0) || (watch == "")) {
        // show warning
        var warning = "Number of watch can not be negative";
        return warning;
    } else {
        var totalWatchPrice = watch * perWatchPrice;
        totalPrice += totalWatchPrice;

    }

    if ((phone <= 0) || (phone == "")) {
        var warning = "Number of phone can not be negative";
        return warning;
    } else {
        var totalPhonePrice = phone * perPhonePrice;
        totalPrice += totalPhonePrice;

    }

    if ((laptop <= 0) || (laptop == "")) {
        var warning = "Number of laptop can not be negative";
        return warning;
    } else {
        var totalLaptopPrice = laptop * perLaptopPrice;
        totalPrice += totalLaptopPrice;
    }

    return totalPrice;
}


// calculate hotelCost

function hotelCost(days) {
    var totalCost = 0;
    var warning;
    // check if days is greater 10 or not 
    if (days <= 10) {
        if (days < 0) {
            // show error if days is negative
            warning = 'number can not be zero or negative';
            return warning;
        } else {
            // calculate total days and total cost for number of days
            var first10day = days;
            first10daysCost = first10day * 100;
            totalCost = first10daysCost;
            return totalCost;
        }

    } else if ((days > 10) && (days <= 20)) {

        if (days < 0) {
            // show error if days is negative
            warning = 'number can not be zero or negative';
            return warning;
        } else {
            // calculate total days and total cost for number of days
            var second10day = (days - 10);
            var first10day = days - second10day;
            var first10daysCost = first10day * 100;
            var second10daysCost = second10day * 80;
            totalCost = first10daysCost + second10daysCost;
            return totalCost;
        }

    } else {
        if (days < 0) {
            // show error if days is negative
            warning = 'number can not be zero or negative';
            return warning;
        } else {
            // calculate total days and total cost for number of days
            second10day = 10;
            first10day = 10;
            var restday = days - (first10day + second10day)
            first10daysCost = first10day * 100;
            second10daysCost = second10day * 80;
            restDayCost = restday * 50;

            totalCost = first10daysCost + second10daysCost + restDayCost;
            return totalCost;
        }
    }
}

/*
    find big word length from an array 
    with megaFriend() function
*/

 

var friends = ["alina", "angelina", "melane", "jacson"];

function megaFriend(array) {

    let longWord = "";

    //  check for empty array 
    if (array == "") {
        var warning = "Array can not be empty";
        return warning;
    } else {
        for (i = 0; i < array.length; i++) {
            // compare length between array length and longword
            if (array[i].length > longWord.length) {
                // assign lenght to longword
                longWord = array[i].length;
            }
        }
    }
    // return longWord;
    console.log(longWord); // test in console 
}

megaFriend(friends)