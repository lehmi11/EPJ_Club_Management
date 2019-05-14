
import { getConnection } from "typeorm";
import { getRepository } from "typeorm";

// import { Gruppe } from "../entities/Gruppe";

export class TeamServiceMock {
  public async getTeams() {
    let result = "Test";
    return result;
  }

  public async getTeamById(groupId: number) {
    return SpeechRecognitionResult;
  }

  public async getGroupsWithCount() {
    return rows;
  }

  public async getGroupWithMembers() {
    return rows;
  }

  public async createTeam(data: JSON) {

  }

  public async deleteTeam(idToDelete: number) {
  }

}

export const teamServiceMock = new TeamServiceMock();
