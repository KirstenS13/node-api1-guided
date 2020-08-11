// Premise: we must create a folder for every letter of the alphabet

// require = another way to "import" a dependency
// the JS in Node is older than the JS in React, so we use require not import
const fs = require("fs");

// creates a new folder called 'data'
fs.mkdirSync("data");

// run a callback function for each letter of the alphabet
"abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => {
    // creates a new folder for the currect letter (inside of the data folder)
    fs.mkdirSync(`data/${letter}`);
});

// we just automated a tedious task with simple node script

// the "fs" package comes from Node
// fs stands for "file-system" and comes with Node

// A list of all the packages that come with Node - https://nodejs.org/api/
// there are lots of useful packages in here

// this is still just JS, so most npm packages can also be installed and used as long as they don't depend on a browser

// Node can be used for lots of stuff beyond web development because Node has access to the lower-level system of your computer
// JS is now useful for more than web development
// we could build code that sends a message to someone every day

// For example, we can build web servers with Node - one of the most useful things for Node

// web servers respond to incoming HTTP requests
// they're our backend

// Node makes creating web servers really easy