var name = prompt("What is your name ?");
var guestList = ["Luffy", "Goku", "Naruto", "Ichigo", "Zoro"];
if (guestList.includes(name)){
    alert("You are welcome to the party.");
} else {
    alert("Sorry but you are not invited.");
}