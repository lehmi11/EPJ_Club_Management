const connectionString = "postgresql://postgres:clubmanager@sinv-56037.edu.hsr.ch:5432/clubManager"

const {Client} = require("pg");
export const client = new Client({
    connectionString: connectionString,
/*  user: "postgres",
    password: "clubmanager",
    host: "152.96.56.37",
    port: 5432,
    database: "clubManager", */
});

