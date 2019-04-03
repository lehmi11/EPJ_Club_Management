const connectionString = "postgresql://postgres:clubmanager@sinv-56037.edu.hsr.ch:5432/clubManager";

import {Pool} from "pg";
export const pool = new Pool();

import {Client} from "pg";
export const client = new Client({
    connectionString,
/*  user: "postgres",
    password: "clubmanager",
    host: "152.96.56.37",
    port: 5432,
    database: "clubManager", */
});

