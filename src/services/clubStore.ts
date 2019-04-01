
const connectionString = "postgresql://postgres:clubmanager@sinv-56037.edu.hsr.ch:5432/clubManager"

const {Client} = require("pg");
const client = new Client({
    connectionString: connectionString,
/*  user: "postgres",
    password: "clubmanager",
    host: "152.96.56.37",
    port: 5432,
    database: "clubManager", */
});


export class ClubStore {

    public async getMembersFeeNotPaid() {
        try {
            await client.connect();
            const {rows} = await client.query(
                `SELECT mit.name AS "Nachname", mit.vorname AS "Vorname", mit.strasse AS "Strasse",
                    mit.plz AS "PLZ", mit.ort AS "ORT"
                FROM mitglied mit INNER JOIN
                    mitgliedschaft mitgliedsch ON mitgliedsch.mitgliedid = mit.id
                WHERE mitgliedsch.beitragbezahlt = false `);           
            // console.table(rows);
            return rows;
        } catch (error) {
            console.log(`Error-Message: ${error}`);
        } finally {
            await client.end();
        }
    }

    public async getTotalMembershipPaid() {
        try {
            await client.connect();
            const {rows} = await client.query(
                `SELECT COUNT(*)*100 as paidMembership
                FROM mitgliedschaft 
                WHERE beitragbezahlt = true`);
            // console.table(rows);
            return rows;
        } catch (error) {
            console.log(`Error-Message: ${error}`);
        } finally {
            await client.end();
        }
    }

    public async getTotalMembershipNotPaid() {
        try {
            await client.connect();
            const {rows} = await client.query(
                `SELECT COUNT(*)*100 as notPaidMembership
                FROM mitgliedschaft 
                WHERE mitgliedschaft.beitragbezahlt = false"`);
            // console.table(rows);
            return rows;
        } catch (error) {
            console.log(`Error-Message: ${error}`);
        } finally {
            await client.end();
        }
    }

    public async getTotalMembershipWarning() {
        try {
            await client.connect();
            const {rows} = await client.query(`
                SELECT COUNT(*)*100 AS warning 
                FROM mitgliedschaft 
                WHERE mitgliedschaft.beitragbezahlt = false 
                AND (mitgliedschaft.rechnungsdatum - now()::date) > 1`);
            // console.table(rows);
            return rows;
        } catch (error) {
            console.log(`Error-Message: ${error}`);
        } finally {
            await client.end();
        }
    }

}

export const clubStore = new ClubStore();

