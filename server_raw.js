// raw node server

// http is another package included with Node
const http = require("http");

// the callback function in there will run every time a request is made to the server
// the callback takes two parameters (request, response) aka (req, res) aka "the homies"
// we can use "req" to get information about the incoming http request
// we can use "res" to set information on the outgoing http response
const server = http.createServer((req, res) => {
    // assume this is a successful response
    res.statusCode = 200;

    // tells the client what type of data we're sending back
    res.setHeader("Content-Type", "text/html")

    // sends information(data) back to the client
    res.write("<h1>Hello, World</h1>");

    // finalize the response and send it off into the internet
    res.end()
});

// tells the server to wait for requests on port 8080
// the server runs the callback when it gets called
server.listen(8080, () => {
    // this code runs whenever the server is started
    // it will show up on the terminal, not the browser, because Node is running separately from the browser
    // the browser does not know Node exists, so console.logs will go to the terminal, not the browser
    console.log("Server started on port 8080")
});

// it does not matter what port you run the server on (except not port 80, or anything below 1000)
// port 8080 is pretty common for running local things

// run "node server_raw.js" in the terminal to start the server
// the server continues listening until you tell it to stop with ctrl + c in terminal
// again, ctrl + c in the terminal stops the server from listening

// you can visit the server in the browser on http://localhost:8080/