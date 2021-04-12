//          https://github.com/sumon7890/ProgrammingHero_assignment

// convert kilometer to meter

function kilometerToMeter(kilometer) {

    // check if parameter is negative
    if (kilometer <= 0) {
        var NoEmpty = "Number is No Empaty";
        return NoEmpty;
    } else {
        var result = kilometer * 1000;
        return result;
    }
}

var result = kilometerToMeter(20);
console.log(result)

// budget calculator

function budgetCalculator(monitor, tv, mobaile) {

    // Define product price 
    var perMonitorPrice = 2000;
    var perTvPrice = 20000;
    var perMobailePrice = 500;
    var totalPrice = 0;

    //  check if price is empty or negative 

    if ((monitor <= 0) || (monitor == "")) {
        // show warning
        var NoEmpty = "Number No Empty";
        return NoEmpty;
    } else {
        var totalMonitorPrice = monitor * perMonitorPrice;
        totalPrice += totalMonitorPrice;

    }

    if ((tv <= 0) || (tv == "")) {
        var NoEmpty = "Number is No Empty";
        return NoEmpty;
    } else {
        var totalTvPrice = tv * perTvPrice;
        totalPrice += totalTvPrice;

    }

    if ((mobaile <= 0) || (mobaile == "")) {
        var NoEmpty = "Number is No empty";
        return NoEmpty;
    } else {
        var totalmobailePrice = mobaile * perMobailePrice;
        totalPrice += totalmobailePrice;
    }

    return totalPrice;
}


// calculate hotelCost

function hotelCost(days) {
    var totalCost = 0;
    var NoEmpty;
    if (days <= 10) {
        if (days < 0) {
            NoEmpty = 'number is no Empty';
            return NoEmpty;
        } else {
            // first 10 day cost
            var first10day = days;
            first10daysCost = first10day * 100;
            totalCost = first10daysCost;
            return totalCost;
        }

    } else if ((days > 10) && (days <= 20)) {

        if (days < 0) {
            NoEmpty = 'number is no Empty';
            return NoEmpty;
        } else {
            // seceond 10 days cost
            var second10day = (days - 10);
            var first10day = days - second10day;
            var first10daysCost = first10day * 100;
            var second10daysCost = second10day * 80;
            totalCost = first10daysCost + second10daysCost;
            return totalCost;
        }

    } else {
        if (days < 0) {
            NoEmpty = 'number can not be zero or negative';
            return NoEmpty;
        } else {
            // total cost 
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

    //  megaFriend() function
 

var friends = ["Ruble", "Korim", "josna", "raju"];

function megaFriend(array) {

    let longWord = "";

    if (array == "") {
        var Noempty = "no empty";
        return Noempty;
    } else {
        for (i = 0; i < array.length; i++) {
            if (array[i].length > longWord.length) {
                longWord = array[i].length;
            }
        }
    }
    return longWord
}

megaFriend(friends);