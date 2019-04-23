
import * as db from "../config/dbConfig";

import {createConnection, getManager} from "typeorm";
import {getConnection} from "typeorm";
import {getRepository} from "typeorm";

import { Anlass } from "../entities/Anlass";
import { Mitglied } from "../entities/Mitglied";

export class ClubStore {

    public async getMembers() {

        // const connection = await createConnection();

        const repository = getRepository(Mitglied);

        const mitglieds: Mitglied[] = await repository.find();
        return mitglieds;
    }

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

    public async getEvents() {
        /*
        const {rows} = await db.client.query(`
            SELECT name AS "Anlass",
            datum AS "Datum",
            von AS "Start",
            bis AS "Ende",
            ort AS "Ort"
            FROM anlass`);
        return rows;*/

        const connection = getConnection();
        const result = await connection.createQueryBuilder().select(["anl.id", "anl.name", "anl.datum", "anl.von", "anl.bis", "anl.ort"]).from(Anlass, "anl").getMany();
        return result;
    }

    public async getGroupsWithCount() {
        const {rows} = await db.client.query(`
            SELECT gruppe.name AS "Name",
            gruppe.verantwortlicher AS "Verantwortlicher",
            COUNT(*) AS "Anzahl"
            FROM gruppe INNER JOIN gruppenbelegung
                ON gruppe.id = gruppenbelegung.gruppenid INNER JOIN
                mitglied ON gruppenbelegung.mitgliedid = mitglied.id
                GROUP BY gruppe.name, gruppe.verantwortlicher;`);
        return rows;
    }

    public async getSpecificGroupWithMembers( ID ) {
        const {rows} = await db.client.query(`
            SELECT gruppe.name AS "Gruppenname",
            gruppe.verantwortlicher AS "Verantwortlicher",
            mitglied.name AS "Name",
            mitglied.vorname AS "Vorname",
            mitglied.strasse AS "Adresse",
            mitglied.plz AS "PLZ",
            mitglied.ort AS "Ort"
            FROM gruppe INNER JOIN
            Gruppenbelegung ON gruppe.id = gruppenbelegung.gruppenid
            INNER JOIN mitglied ON gruppenbelegung.mitgliedid = mitglied.id
            WHERE gruppe.id =` + ID + `;`);
        return rows;
    }

    public async getNameOfMembersWithAddress() {
        const {rows} = await db.client.query(`
            SELECT name AS "Name",
            vorname AS "Vorname",
            strasse AS "Adresse",
            plz AS "PLZ",
            ort AS "Ort"
            FROM mitglied;`);
        return rows;
    }
    public async getSpecificEventWithMembers( ID ) {
        const {rows} = await db.client.query(`
            SELECT anlass.name AS "Name",
            anlass.ort AS "Ort",
            anlass.datum AS "Datum",
            anlass.von AS "Start",
            anlass.bis AS "Ende",
            anlass.verantwortlicher AS "Verantwortlicher",
            mitglied.name AS "Mitgliedname",
            mitglied.vorname AS "Mitgliedvorname",
            mitglied.strasse AS "Adresse",
            mitglied.plz AS "PLZ",
            mitglied.ort AS "Ort"
            FROM anlass INNER JOIN
            anlassbelegung ON anlass.id = anlassbelegung.anlassid INNER JOIN
            mitglied ON mitglied.id = anlassbelegung.mitgliedid
            WHERE anlass.id =` + ID + `;`);
        return rows;
    }
}

export const clubStore = new ClubStore();

