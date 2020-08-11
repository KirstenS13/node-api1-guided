const name = process.argv[2] || "World";
// process is node specific (can't use in browser)
// argv refers to an array [node, hello.js, Kirsten]
console.log(`Hello, ${name}`);


// to run code in node
// type "node file-name" in terminal