import { hello } from "../src/hello";
import { expect } from "chai";
import { sinon } from "sinon";
import * as db from "../src/config/dbConfig";
import { TeamController } from "../src/controllers/teamController";
import { TeamServiceMock } from "./TeamServiceMock";


import 'mocha';





describe('Stub Test', sinon.test(function () {
  let stub = this.stub($, 'post');

  let expectedUrl = '/api/groups';
  var expectedParams = {
    first: 'Expected first name';
    last: 'Expected last name';
  };

  let user = {
    firstname: expectedParams.first,
    lastname: expectedParams.last
  }

  saveUser(user, function () { });
  postMessage.restore();

  sinon.assert.calledWith(post, expectedUrl, expectedParams);

});

describe('Hello function', () => {

  let teamController;

  beforeEach(() => {
    let teamService = new TeamServiceMock();
    teamController = new TeamController(teamService);
    let mockService = sinon.mock(teamService);

  });

  it('should return hello world', () => {
    const result = hello();


    expect(result).to.equal('Hello world!');
  });

});