import {Client} from "pg";
const client = new Client({
    /* tslint:disable:object-literal-sort-keys */
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "ClubManagerDB",
    /* tslint:enable:object-literal-sort-keys */
});

export class ClubStore {

    public async getMitglieder() {
        await client.connect();
        const results = await client.query("select * from mitglied");
        console.table(results.rows);
        await client.end();
    }

    public async addMitglied() {
        try {
            await client.connect();
            await client.query("BEGIN");
            await client.query("Insert into mitglied values ($1, $2, $3)", [6, "Michi", "Meier"]);
        } catch {
            await client.query("ROLLBACK");
        } finally {
            await client.end();
        }
    }

}


export const clubStore = new ClubStore();

