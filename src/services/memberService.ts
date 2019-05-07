import * as db from "../config/dbConfig";

import {getConnection, Raw} from "typeorm";
import {getRepository} from "typeorm";
import {Anlassbelegung} from "../entities/Anlassbelegung";

import { Mitglied } from "../entities/Mitglied";
import { Mitgliedschaft } from "../entities/Mitgliedschaft";

export class MemberService {

    public async getMembers() {

        const connection = getConnection();
        const repository = getRepository(Mitglied);
        const mitglieds: Mitglied[] = await repository.find();
        return mitglieds;
    }

    public async createMember(data) {
        const connection = getConnection();
        const memberRepo = getRepository(Mitglied);
        const newMember = memberRepo.create({
            ...data,
            verein: {id: 1},
        });
        await memberRepo.save(newMember);
    }

    public async editMember(data) {
        const connection = getConnection();
        const memberRepo = getRepository(Mitglied);

        await memberRepo.update(data.id, {...data, verein: {id: 1}});
    }

    public async deleteMember(idToDelete: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Mitglied)
            .where("id = :id", { id: idToDelete})
            .execute();
    }

    public async getNameOfMembersWithAddress() {
        const connection = getConnection();
        const repository = getRepository(Mitglied);
        const mitglieds: Mitglied[] = await repository.find({select: ["id", "name", "vorname", "strasse", "plz", "ort"]});
        return mitglieds;
    }

    public async getMemberById(memberId: number) {
        return await getConnection()
            .getRepository(Mitglied)
            .createQueryBuilder()
            .where("id = :id", { id: memberId })
            .getOne();
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
        const connection = getConnection();
        const repository = getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "true"},
        });
        const beitrag = mitglieds[0].mitgliederbeitrag;
        return mitglieds.length * beitrag;
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
        const connection = getConnection();
        const repository = getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false"},
        });
        const beitrag = mitglieds[0].mitgliederbeitrag;
        return mitglieds.length * beitrag;
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
        const connection = getConnection();
        const repository = getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false", rechnungsdatum: Raw((alias) => `${alias} < NOW()`)},
        });
        const beitrag = mitglieds[0].mitgliederbeitrag;
        return mitglieds.length * beitrag;
    }

    public async getTotalMembershipWarningCount() {
        const connection = getConnection();
        const repository = getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false", rechnungsdatum: Raw((alias) => `${alias} < NOW()`)},
        });
        return mitglieds.length;
    }
  
    public async getNameOfMembersWithAddress() {
        const connection = getConnection();
        const repository = getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false", rechnungsdatum: Raw((alias) => `${alias} < NOW()`)},
        });
        return mitglieds.length;
    }

}

export const memberService = new MemberService();
