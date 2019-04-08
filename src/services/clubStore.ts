
import * as db from "../config/dbConfig";

export class ClubStore {

    public async getMembersFeeNotPaid() {
        const {rows} = await db.client.query(
            `SELECT mit.name AS "Nachname",
            mit.vorname AS "Vorname",
            mit.strasse AS "Strasse",
            mitgliedsch.mitgliederbeitrag AS "Betrag",
            mit.plz AS "PLZ", mit.ort AS "ORT"
            FROM mitglied mit INNER JOIN
                mitgliedschaft mitgliedsch ON mitgliedsch.mitgliedid = mit.id
            WHERE mitgliedsch.beitragbezahlt = false `);
        return rows;
    }

    public async getTotalMembershipPaid() {
        const {rows} = await db.client.query(
            `SELECT COUNT(*)*100 as "paidMembership"
            FROM mitgliedschaft
            WHERE beitragbezahlt = true`);
        return rows[0];
    }

    public async getTotalMembershipPaidCount() {
        const {rows} = await db.client.query(
            `SELECT COUNT(*) as "paidMembershipCount"
            FROM mitgliedschaft
            WHERE beitragbezahlt = true`);
        return rows[0];
    }

    public async getTotalMembershipNotPaid() {
        const {rows} = await db.client.query(
            `SELECT COUNT(*)*100 AS "notPaidMembership"
            FROM mitgliedschaft
            WHERE mitgliedschaft.beitragbezahlt = false`);
        return rows[0];
    }

    public async getTotalMembershipNotPaidCount() {
        const {rows} = await db.client.query(
            `SELECT COUNT(*) AS "notPaidMembershipCount"
            FROM mitgliedschaft
            WHERE mitgliedschaft.beitragbezahlt = false`);
        return rows[0];
    }

    public async getTotalMembershipWarning() {
        const {rows} = await db.client.query(`
            SELECT COUNT(*)*100 AS "warning"
            FROM mitgliedschaft
            WHERE mitgliedschaft.beitragbezahlt = false
            AND (mitgliedschaft.rechnungsdatum - now()::date) > 1`);
        return rows[0];
    }

    public async getTotalMembershipWarningCount() {
        const {rows} = await db.client.query(`
            SELECT COUNT(*) AS "warningCount"
            FROM mitgliedschaft
            WHERE mitgliedschaft.beitragbezahlt = false
            AND (mitgliedschaft.rechnungsdatum - now()::date) > 1`);
        return rows[0];
    }
}

export const clubStore = new ClubStore();

