// assigning variables to the user and dragons health (note to self: Dragon = 10 health User = 5!!!!)
let dragonHealth = 10; //Dragon Health
let userHealth = 5; //User Health


//Refer here for "while" https://www.w3schools.com/js/js_loop_while.asp
//Using while during both user and dragons health
while (userHealth > 0 && dragonHealth > 0) {


    //Prompt the user to enter number of hits to hit the dragon
    //Note to self, try using parseFloat()
    //Refer here if I lose the website
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
    let numHits = parseFloat(prompt("How many hits would like to use for your attack?"));



    //Generate a random number between 1 and number of hits entered by user
    //refer back to last weeks homework for else if statments
    //Refer here on how to use Math.floor & Math.random
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let userHit = Math.floor(Math.random() * (numHits = 1 + 1)) + 1;
    // >5 random
    if (userHit > 5) {
        // 1 hit to dragon health
        dragonHealth -= 1;
        //Else
    } else if (userHit > 0 && userHit <= 5) {
        //random
        dragonHealth -= userHit;
    }

    //Focusing in on dragons health bar
    prompt(`Dragon has ${dragonHealth} left in his health bar!`);

    //Generate a random number between 1 and 2
    let dragonHit = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    userHealth -= dragonHit;
    //Print the amount of health the user has left
    prompt(`User has ${userHealth} left in your health bar!.`);

    //assigning win/lose prompts
    //refer back to last weeks hw for else if statements
    if (userHealth === 0) {
        prompt("User you have lost, better luck next time!");

    } else if (dragonHealth === 0) {
        prompt("User is the winner!");

    } else if (userHealth === 0 && dragonHealth === 0) {
        prompt("Tie!");
    }

}









