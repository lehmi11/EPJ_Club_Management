import bodyparser from "body-parser";
import express from "express";
import hbs from "express-hbs";
import {Request, Response} from "express-serve-static-core";



const app = express();
app.engine("hbs", hbs.express4());
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");




app.get("/", function(req: Request, res: Response) {
  res.send("Hello EPJ Club Manager!");
});

const hostname = "127.0.0.1";
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

