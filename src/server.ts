import express from "express";
// tslint:disable-next-line: ordered-imports
import bodyParser from "body-parser";
var hbs = require("express-hbs");
import {Request, Response} from "express-serve-static-core";
import {clubRoutes} from "./routes/clubRoutes";


const app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(clubRoutes);
app.use(bodyParser.urlencoded({extended: false}));


const hostname = "127.0.0.1";
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

