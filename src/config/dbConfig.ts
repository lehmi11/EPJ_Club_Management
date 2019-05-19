const connectionString = "postgresql://postgres:clubmanager@sinv-56037.edu.hsr.ch:40000/clubManager";

import { Pool } from "pg";
export const pool = new Pool();

import { Client } from "pg";
export const client = new Client({
    connectionString,
});

