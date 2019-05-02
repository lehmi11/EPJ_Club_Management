import * as db from "../config/dbConfig";

import {getConnection} from "typeorm";
import {getRepository} from "typeorm";

import { Mitglied } from "../entities/Mitglied";
import { Mitgliedschaft } from "../entities/Mitgliedschaft";

export class MemberService {

    public async getMembers() {

        const connection = getConnection();
        const repository = getRepository(Mitglied);
        console.log(repository);
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
        const connection = getConnection();
        const repository = getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "true"},
            });
        return mitglieds.length;
    }

    public async getTotalMembershipNotPaid() {
        const {rows} = await db.client.query(
            `SELECT COUNT(*)*100 AS "notPaidMembership"
            FROM mitgliedschaft
            WHERE mitgliedschaft.beitragbezahlt = false`);
        return rows[0];
    }

    public async getTotalMembershipNotPaidCount() {
        const connection = getConnection();
        const repository = getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false"},
        });
        return mitglieds.length;
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

    public async getNameOfMembersWithAddress() {
        const connection = getConnection();
        const repository = getRepository(Mitglied);
        const mitglieds: Mitglied[] = await repository.find({select: ["name", "vorname", "strasse", "plz", "ort"]});
        return mitglieds;
    }

    public async getMemberById(memberId: number) {
        return await getConnection()
            .getRepository(Mitglied)
            .createQueryBuilder()
            .where("id = :id", { id: memberId })
            .getOne();
    }
}

export const memberService = new MemberService();
