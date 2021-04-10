// https://github.com/sumon7890/ProgrammingHero_assignment

// kelometerToMeter
function kelometerToMeter(n){
    return n*1000
}
var result = kelometerToMeter(2);
console.log(result)



//bugetClaculator
function bugetClaculator(a,b,c){
    var sum = 0;   
    if(a == 0){
        var x = 0
        x = a*2;
        return x
    }
    else if(b==0){
        var y = 0
        y = b*2;
        return y
    }
    else if(c==0){
        var z = 0
        z = c*2;
        return z
    }
    var total = x+y+z;
    var sum = total;
    return sum
}
var total = bugetClaculator(5,4,9);
console.log(total)




//hotelCost
// day 1 to 10 = 100 tk
// day 10 to 17 = 80 tk
//day 17 abrove = 50 tk
function hotelCost(n){
    var sum = 0;
    if(n<=10){
        sum = n*100;
    }
    else if(n>=10 & n<=17){
        sum = n*80;
    }
    else if(n >= 17){
        sum = n * 50 ;
    }
    return sum
}
var totalDay = hotelCost(15);
console.log(totalDay)

//megaFriend

// var names = ["rohim", "korim","jobbar","abdul Jolil"];
// var bigNme = [0];

// function foundBigWord(names){
//     for(var i = 0; i<names.lenght;i++){
//         var element = names[i]
//         if( element > bigNme){
//             bigNme = element
//         }
//     }
// }




//megaFriend
var friendName = ["rohim", "korim","jobbar","abdul Jolil"];
var bigNme = 0;

    for(var i = 0; i <friendName.lenght; i++){
        var element = friendName[i];
        if( element > bigNme){
            bigNme = element;
        }
    }

console.log(bigNme)