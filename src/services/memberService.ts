
import {createConnection, getConnection, Raw} from "typeorm";
import { Mitglied } from "../entities/Mitglied";
import { Mitgliedschaft } from "../entities/Mitgliedschaft";

export class MemberService {

    public async getMembers() {

        const connection = getConnection();
        const repository = connection.getRepository(Mitglied);
        const mitglieds: Mitglied[] = await repository.find();
        return mitglieds;
    }

    public async createMember(data) {
        const connection = getConnection();
        const memberRepo = connection.getRepository(Mitglied);
        const newMember = memberRepo.create({
            ...data,
            verein: {id: 1},
        });
        await memberRepo.save(newMember);
    }

    public async editMember(data) {
        const connection = getConnection();
        const memberRepo = connection.getRepository(Mitglied);

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

    public async getManagingComittee() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitglied);
        const ManagingComittee: Mitglied[] = await repository.find({
            where: {istVorstand: "true"},
        });
        return ManagingComittee;
    }

    public async getMemberById(memberId: number) {
        return await getConnection()
            .getRepository(Mitglied)
            .createQueryBuilder()
            .where("id = :id", { id: memberId })
            .getOne();
    }

    public async getNameOfMembersWithAddress() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitglied);
        const mitglieds: Mitglied[] = await repository.find({select: ["id", "name", "vorname", "strasse", "plz", "ort"]});
        return mitglieds;
    }

    public async getMembersFeeNotPaid() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitgliedschaft);
        const mitglieds = repository.find({ relations: ["mitglied"],
        where: {beitragbezahlt: "false"}});
        return mitglieds;
    }

    public async getTotalMembershipPaid() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "true"},
        });
        const beitrag = mitglieds[0].mitgliederbeitrag;
        return mitglieds.length * beitrag;
    }

    public async getTotalMembershipPaidCount() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "true"},
        });
        return mitglieds.length;
    }

    public async getTotalMembershipNotPaid() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false"},
        });
        const beitrag = mitglieds[0].mitgliederbeitrag;
        return mitglieds.length * beitrag;
    }

    public async getTotalMembershipNotPaidCount() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false"},
        });
        return mitglieds.length;
    }

    public async getTotalMembershipWarning() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false", rechnungsdatum: Raw((alias) => `${alias} < NOW()`)},
        });
        const beitrag = mitglieds[0].mitgliederbeitrag;
        return mitglieds.length * beitrag;
    }

    public async getTotalMembershipWarningCount() {
        const connection = getConnection();
        const repository = connection.getRepository(Mitgliedschaft);
        const mitglieds: Mitgliedschaft[] = await repository.find({
            where: {beitragbezahlt: "false", rechnungsdatum: Raw((alias) => `${alias} < NOW()`)},
        });
        return mitglieds.length;
    }

}

export const memberService = new MemberService();
