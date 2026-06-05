var numberOfBottles = 99;
while (numberOfBottles >= 0){
    var bottleWord = "bottle";
    if (numberOfBottles === 1){
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + "" + bottleWord + " of beer on the walls"); 
    console.log(numberOfBottles + "" + bottleWord + " of beer,");
    console.log("Take 1 down pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + "" + bottleWord + " of beer on the walls");
}