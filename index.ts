
import * as readline from "readline";

console.log("======================================================================");
console.log("               Hello World Program!               ");
console.log("======================================================================");

function createGreeting(name: string): string {
    return `Welcome, ${name}! This is a TypeScript program running in Node.js.`;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name: string) => {

    const userName: string = name.trim();

    if (userName === "") {
        console.log("You didn't enter a name. Please run the program again and provide your name.");
        rl.close();
        return;
    }

    console.log(`\nHello, ${userName}! Welcome to my TypeScript program.`);

    console.log(createGreeting(userName));

    const now: Date = new Date();
    console.log(`Today's date: ${now.toLocaleDateString()}`);
    console.log(`Current time: ${now.toLocaleTimeString()}`);

    const hour: number = now.getHours();
    if (hour < 12) {
        console.log(`Good morning, ${userName}!`);
    } else if (hour < 18) {
        console.log(`Good afternoon, ${userName}!`);
    } else {
        console.log(`Good evening, ${userName}!`);
    }

    console.log("======================================================================");
    console.log("Thank you for using my program!               ");
    console.log("Goodbye!");
    console.log("======================================================================");

    rl.close();
});
