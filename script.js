//Variables
//var has the flexibility as a variable but is open to most bugs
//let 
//const denotes a constant

let xp= 0;
let health= 100;
let gold= 50;
let currentWeapon= 0;
let fighting;
let monsterHealth;
let inventory= ["stick"];

const button1= document.querySelector("#button1");
const button2= document.querySelector("#button2");
const button3= document.querySelector("#button3");
const text= document.querySelector("#text");
const xpText= document.querySelector("#xpText");
const healthText= document.querySelector("#healthText");
const goldText= document.querySelector("#goldText");
const monsterStats= document.querySelector("#monsterStats");
const monsterNameText= document.querySelector("#monsterName");
const monsterHealthText= document.querySelector("#monsterHealth");

const weapons= [
    {
        name:"stick",
        power:5
    },
    {
        name:"dagger",
        power:30
    },
    {
        name:"claw hammer",
        power:50
    },{
        name:"sword",
        power:100
    }
]

const locations= [//you can create an object array; an object consists of a key:value pair
    {
        name:"town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],//objects with keys that are more than one word are put in quotes
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name:"store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],//objects with keys that are more than one word are put in quotes
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name:"cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],//objects with keys that are more than one word are put in quotes
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    }
];

//Initialize buttons
button1.onclick= goStore;
button2.onclick= goCave;
button3.onclick= fightDragon;

function update(location){
    button1.innerText= location["button text"][0];
    button2.innerText= location["button text"][1];
    button3.innerText= location["button text"][2];

    button1.onclick= location["button functions"][0];
    button2.onclick= location["button functions"][1];
    button3.onclick= location["button functions"][2];

    text.innerText= location.text;//dot notation only works when the key of the property of an object is a single word. 
}

function goTown(){
    console.log("Going to town square.");

    /*button1.innerText= "Go to store";
    button2.innerText= "Go to cave";
    button3.innerText= "Fight dragon";

    button1.onclick= goStore;
    button2.onclick= goCave;
    button3.onclick= fightDragon;

    text.innerText= "You are in the town square. You see a sign that says \"store\".";*/

    update(locations[0]);
}


function goStore(){
    console.log("Going to store.");

    /*button1.innerText= "Buy 10 health (10 gold)";//innerText changes the text of the buttons
    button2.innerText= "Buy weapon (30 gold)";
    button3.innerText= "Go to town square";

    button1.onclick= buyHealth;
    button2.onclick= buyWeapon;
    button3.onclick= goTown;

    text.innerText= "You enter the store";*/

    update(locations[1]);
}

function goCave(){
    console.log("Going to cave.");

    update(locations[2]);
}

function fightDragon(){
    console.log("Fighting dragon.");
}

function buyHealth(){
    console.log("Buying health.");

    if(gold>=10){
        gold= gold-10;
        health= health+10;

        goldText.innerText= gold;
        healthText.innerText= health;
    }
    else{
        text.innerText= "You do not have enough gold to buy health.";
    }
}

function buyWeapon(){
    console.log("Buying weapon.");

    if(gold >= 30){
        gold= gold-30;
        currentWeapon= currentWeapon+1;
        goldText.innerText= gold;
        let newWeapon= weapons[currentWeapon].name;
        text.innerText= "You now have a " + newWeapon + ".";
    }
}

function fightSlime(){
    console.log("Fighting beast.");
}

function fightBeast(){
    console.log("Fighting beast.");
}

















