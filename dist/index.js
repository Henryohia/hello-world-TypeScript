"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
console.log("======================================================================");
console.log("               Hello World Program!               ");
console.log("======================================================================");
function createGreeting(name) {
    return `Welcome, ${name}! This is a TypeScript program running in Node.js.`;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What is your name? ", (name) => {
    const userName = name.trim();
    if (userName === "") {
        console.log("You didn't enter a name. Please run the program again and provide your name.");
        rl.close();
        return;
    }
    console.log(`\nHello, ${userName}! Welcome to my TypeScript program.`);
    console.log(createGreeting(userName));
    const now = new Date();
    console.log(`Today's date: ${now.toLocaleDateString()}`);
    console.log(`Current time: ${now.toLocaleTimeString()}`);
    const hour = now.getHours();
    if (hour < 12) {
        console.log(`Good morning, ${userName}!`);
    }
    else if (hour < 18) {
        console.log(`Good afternoon, ${userName}!`);
    }
    else {
        console.log(`Good evening, ${userName}!`);
    }
    console.log("======================================================================");
    console.log("Thank you for using my program!               ");
    console.log("Goodbye!");
    console.log("======================================================================");
    rl.close();
});
