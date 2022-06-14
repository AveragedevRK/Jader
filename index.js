var express = require("express");
var { client } = require("./Config/index");
var { UserModel } = require('./Models/User.Model')
var { UserService } = require("./Services/User.Service")
var { createUserRouter } = require("./Routes/User.Route");

var app = express();

app.use(express.json());
app.use(express.urlencoded(
    {
        extended: true
    }
))

client.connect().then(
    async (Client) => {
        let coll = await Client.db("Jader").collection("User");
        let model = await new UserModel(await coll);
        let service = await new UserService(await model);
        console.log(service);
        let router = await createUserRouter(await service);

        await app.use("/user", router);
    }
)

app.get("/", (req, res) => {
    return res.send("hey");
})

app.post("/create", (req, res) => {
    console.log(req.body);
})

app.listen(3000);