// ------------------1. Feet to Mile conversion----------------

function feetToMile(feet){
    var mile;
    if(feet > 0)
    {
        mile = feet / 5280;
    }
    else{
        mile = "Distance can't be negative!";
    }
    mile = mile.toFixed(2);
    return mile;
}
var feet = 100000;
var mile = feetToMile(feet);
console.log(mile);

// ------------------ 2. Wood Calculator ----------------


function woodCalculator(chair, table, bed){
    totalWood = (chair * 1) + (table * 3) + (bed * 5);
    return totalWood;
}

var chair = 6, table = 1, bed = 3;
var totalWood = woodCalculator(chair, table, bed);
console.log(totalWood);

// ------------------ 3. brickCalculator ----------------

function brickCalculator(floorNumber){
    var totalBrick = 0;
    if(floorNumber > 20){
        totalBrick = ((floorNumber - 20) * 10 * 1000) + (10 * 12 * 1000) + (10 * 15 * 1000);
    }
    else if(floorNumber > 10){
        totalBrick = ((floorNumber - 10) * 12 * 1000) + (10 * 15 * 1000);

    }
    else if(floorNumber > 0){
        totalBrick = floorNumber * 15 * 1000;
    }
     else{
         totalBrick = "Floor can't be zero or negative.";
     }
     return totalBrick;
}

var floorNumber = 5;
var totalBrick = brickCalculator(floorNumber);
console.log(totalBrick);

// ------------------ 4. Tiny Friend ----------------

function tinyFriend(friends){
    var tinyFriend;
    if(friends == null){
        tinyFriend = "You have no friends.";
    }
    else{
        tinyFriend = friends[0];
        for(var i = 1; i < friends.length; i++)
        {
            var currentFriend = friends[i];
            if(tinyFriend.length > currentFriend.length){
                tinyFriend = currentFriend;
            }
        }
    }
    return tinyFriend;
}
var friends = (["Shamim", "Himel", "Abrar", "Aikul", "Shahjalal", "Sharif", "Nahid", "Abdullah", "Opu"]);
var tinyFriend = tinyFriend(friends);
console.log(tinyFriend);