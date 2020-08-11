// this is pulling the dependency from "node_modules" now, instead of the stdLib (standard library)
const express = require("express");
// using "./" imports a local file rather than a third-party dependency
const db = require("./database");

// creates a new express server (does a lot under the hood, so we don't have to type that code anymore)
const server = express();

// installing some middleware that helps us parse JSON request bodies
// we'll talk about this later, just copy it over for now
server.use(express.json());

// we want routing, and different endpoints that do different things
// express gives us routing

// makes an endpoint that returns json object when called
// "get" = http method
// "/" = endpoint path
// this is a route
server.get("/", (req, res) => {
    res.json({ message: "Hello, World" });
});

// this is another route
server.get("/users", (req, res) => {
    // gets a list of users from our "fake" database
    const users = db.getUsers();
    // sends back the user object
    res.json(users);
});

// we can reference dynamic data in node as well
// preface it with a ":"
server.get("/users/:id", (req, res) => {
    // the param variable matches up to the name of our URL param above
    // just like react router
    // req.params.id grabs the id used in the ":id" part of the path
    const id = req.params.id;

    // gets a specific user by their ID from the "fake" database
    const user = db.getUserById(id);

    // sends the user object back if the user is truthy (exists)
    if (user) {
        // sends back user because user exists
        res.json(user)
    } else {
        // send back errer because user does not exist
        // res.status and res.statusCode do the same thing, except res.status can have .json chained to it
        // res.statusCode and res.json would need to be 2 separate lines
        // res.status also comes from express
        res.status(404).json({ message: "User not found" })
    }
});

// makes a new user
server.post("/users", (req, res) => {
    const newUser = db.createUser({
        name: req.body.name,
        // req.body.name refers to the request object, which should include the name data that the frontend passes in
        // this means that not all users have a hard-coded name
        // we can pass in a name
    });

    // status 201 means new resource was successfully created, it's more specific than 200
    res.status(201).json(newUser);
});
// we can't test this route from our browser
// we need a REST client like Insomnia or Postman
// this lets us test our server endpoints
// it also gives us a lot more info than if we tested our endpoints with a browser

server.delete("/users/:id", (req, res) => {
    // never trust data from the client, since users do crazy things
    // we need to check to see if the user exists before we can delete them
    const user = db.getUserById(req.params.id);

    if (user) {
        // req.params.id grabs the id used in the ":id" part of the path
        db.deleteUser(req.params.id);

        // since we have nothing to return back to the client, send a 204 with an empty response
        // 204 just means "success but we have nothing to return"
        res.status(204).end();
    } else {
        res.status(404).json({
            message: "User not found"
        });
    };
});

server.listen(8080, () => {
    console.log("Server started on port 8080");
});

// json is used to send data because it is consistent
// both frontend and backend can parse the data, as opposed to html, which might run into parsing issues
// JSON = JavaScript Object Notation

// we can make as many routes as we want as long as the http method/endpoint combinations are unique

// remember to restart the server when you make changes

// lots of ES6 can be used in Node, but not everything
// this is a list of which features you can and cannot use - https://node.green/

// semi-colons are optional in JS, so not required for the end of lines

// express gives us lots of functionality
// ex: res.json, server.get("endpoint", cb)
// express is used a lot in the real-world, but it's not the only framework

// don't get caught-up in the specifics of frameworks
// focus on the fundamental concepts and ideas, and learning frameworks will be easier
// it's important to be adaptable when it comes to which framework you use
// in the real world, different companies use different frameworks, so you need to be able to switch between frameworks

// when building a backend, think of all the different scenarios that could happen and think about how it could break your code
// users do crazy things
// be prepared for the crazy
// don't put anything past the user

// defining routes is part of building an api
// API = Application Programming Interface
// API = software that makes some of its functions available to external programs
// the routes in our code make the api
// for web applications, API = route handling
// it let's the client change data
// API lets clients to CRUD
// create = post
// read = get, head
// update = put, patch
// delete = delete

// on an API, each of our resources (data) should have all the CRUD operations
// each endpoint should be able to do the CRUD operations

// multiple endpoints can have the same path as long as the method is different