import { expect } from "chai";
import "mocha";
import request from "request";

let apiUrl = "http://127.0.0.1:3001/api";



describe("CRUD User", function () {

  it("return user by id", function (done) {
    request.get({ url: apiUrl + "/members/1" },
      function (error, response, body) {
        const bodyObj = JSON.parse(body);
        expect(bodyObj.id).to.equal(1);
        expect(bodyObj.name).to.equal("Reusser");
        expect(bodyObj.vorname).to.equal("Thomas");
        expect(bodyObj.geburtsdatum).to.equal("1991-03-05");
        expect(bodyObj.geschlecht).to.equal("M");
        expect(bodyObj.strasse).to.equal("Sonnenhof 4");
        expect(bodyObj.plz).to.equal(8853);
        expect(bodyObj.ort).to.equal("Lachen");
        expect(bodyObj.email).to.equal("t.reusser@hotmail.com");
        expect(bodyObj.istVorstand).to.equal(true);
        done();
      });
  });
});

describe("CRUD User", function () {

  it("create new Test-User", (done) => {
    request.post({
      url: apiUrl + "/members",
      body: {
        id: 5000,
        geschlecht: "M",
        vorname: "Test-Vorname",
        name: "Test-Nachname",
        geburtsdatum: "1993-12-12",
        email: "test@test.ch",
        strasse: "Teststrasse 12",
        plz: "4123",
        ort: "nirgendwo",
      },
      json: true
    }, function (error, response, body) {
      done();
    });
  });

  it("return Test-User by id", function (done) {
    request.get({ url: apiUrl + "/members/5000" },
      function (error, response, body) {
        const bodyObj = JSON.parse(body);
        expect(bodyObj.id).to.equal(5000);
        expect(bodyObj.name).to.equal("Test-Nachname");
        expect(bodyObj.vorname).to.equal("Test-Vorname");
        expect(bodyObj.geburtsdatum).to.equal("1993-12-12");
        expect(bodyObj.geschlecht).to.equal("M");
        expect(bodyObj.strasse).to.equal("Teststrasse 12");
        expect(bodyObj.plz).to.equal(4123);
        expect(bodyObj.ort).to.equal("nirgendwo");
        expect(bodyObj.email).to.equal("test@test.ch");
        done();
      });
  });
  /*
    it("return Test-User by name", function (done) {
      request.get({ url: apiUrl + "/members/name/Test-Nachname" },
        function (error, response, body) {
          const bodyObj = JSON.parse(body);
          expect(bodyObj.name).to.equal("Test-Nachname");
          expect(bodyObj.vorname).to.equal("Test-Vorname");
          expect(bodyObj.geburtsdatum).to.equal("1993-12-12");
          expect(bodyObj.geschlecht).to.equal("M");
          expect(bodyObj.strasse).to.equal("Teststrasse 12");
          expect(bodyObj.plz).to.equal(4123);
          expect(bodyObj.ort).to.equal("nirgendwo");
          expect(bodyObj.email).to.equal("test@test.ch");
          done();
        });
    });
  */
  it("delete Test-User", function (done) {
    request.delete({ url: apiUrl + "/members/5000" },
      function (error, response, body) {
        done();
      });
  });
});

describe("check event functions", function () {

  it("create three Test-Users", (done) => {
    request.post({
      url: apiUrl + "/members",
      body: {
        id: 5001,
        geschlecht: "M",
        vorname: "Test-Vorname01",
        name: "Test-Nachname01",
        geburtsdatum: "1993-12-12",
        email: "test@test01.ch",
        strasse: "Teststrasse 01",
        plz: "4123",
        ort: "nirgendwo",
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/members",
      body: {
        id: 5002,
        geschlecht: "M",
        vorname: "Test-Vorname02",
        name: "Test-Nachname02",
        geburtsdatum: "1993-12-12",
        email: "test@test02.ch",
        strasse: "Teststrasse 02",
        plz: "4123",
        ort: "nirgendwo",
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/members",
      body: {
        id: 5003,
        geschlecht: "M",
        vorname: "Test-Vorname03",
        name: "Test-Nachname03",
        geburtsdatum: "1993-12-12",
        email: "test@test03.ch",
        strasse: "Teststrasse 03",
        plz: "4123",
        ort: "nirgendwo",
      },
      json: true,
    }, function (error, response, body) {
      done();
    });
  });

  it("create a new Test-Event", (done) => {
    request.post({
      url: apiUrl + "/events",
      body: {
        id: 5001,
        datum: "2019-07-07",
        von: "14:15",
        bis: "17:15",
        ort: "Rapperswil-Jona",
        name: "Test-Event",
        beschreibung: "grösstes Fest, das es jemals gab",
        protokoll: null,
        traktadenliste: null,
        verantwortlicher: null,
      },
      json: true,
    }, function (error, response, body) {
      done();
    });
  });

  it("change Test-Event", (done) => {
    request.post({
      url: apiUrl + "/events/edit",
      body: {
        id: 5001,
        datum: "2019-08-08",
        von: "15:15",
        bis: "18:15",
        ort: "Buchs",
        name: "Test-Changed-Event",
        beschreibung: "kleinstes Fest, das es jemals gab",
      },
      json: true,
    }, function (error, response, body) {
      done();
    });
  });

  it("Test-Event has changed", (done) => {
    request.get({ url: apiUrl + "/events/5001" },
      function (error, response, body) {
        const bodyObj = JSON.parse(body);
        expect(bodyObj.id).to.equal(5001);
        expect(bodyObj.datum).to.equal("2019-08-08");
        expect(bodyObj.von).to.equal("15:15");
        expect(bodyObj.bis).to.equal("18:15");
        expect(bodyObj.ort).to.equal("Buchs");
        expect(bodyObj.name).to.equal("Test-Changed-Event");
        expect(bodyObj.beschreibung).to.equal("kleinstes Fest, das es jemals gab");
        done();
      });
  });

  it("assign Test-User01 to event", (done) => {
    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5001,
      },
      json: true,
    }, function (error, response, body) {
      done();
    });
  });
  it("assign Test-User02 to event", (done) => {
    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5002,
      },
      json: true,
    }, function (error, response, body) {
      done();
    });
  });
  it("assign Test-User03 to event", (done) => {
    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5003,
      },
      json: true,
    }, function (error, response, body) {
      done();
    });
  });

  it("get all three participants of event", (done) => {
    request.get({ url: apiUrl + "/events/participants/5001" },
      function (error, response, body) {
        const bodyObj = JSON.parse(body);
        expect(bodyObj).to.have.lengthOf(3);
        expect(bodyObj[0].mitgliedid.vorname).to.equal("Test-Vorname01");
        expect(bodyObj[0].mitgliedid.name).to.equal("Test-Nachname01");
        expect(bodyObj[1].mitgliedid.vorname).to.equal("Test-Vorname02");
        expect(bodyObj[1].mitgliedid.name).to.equal("Test-Nachname02");
        expect(bodyObj[2].mitgliedid.vorname).to.equal("Test-Vorname03");
        expect(bodyObj[2].mitgliedid.name).to.equal("Test-Nachname03");
        done();
      });
  });

  it("unassign participant from event", (done) => {
    request.delete({
      url: apiUrl + "/events/participants/5001/member/5001",
      json: true
    }, function (error, response, body) {
      done();
    });
  });

  it("get only two participants of event", (done) => {
    request.get({ url: apiUrl + "/events/participants/5001" },
      function (error, response, body) {
        const bodyObj = JSON.parse(body);
        expect(bodyObj).to.have.lengthOf(2);
        expect(bodyObj[0].mitgliedid.vorname).to.equal("Test-Vorname02");
        expect(bodyObj[0].mitgliedid.name).to.equal("Test-Nachname02");
        expect(bodyObj[1].mitgliedid.vorname).to.equal("Test-Vorname03");
        expect(bodyObj[1].mitgliedid.name).to.equal("Test-Nachname03");
        done();
      });
  });

  it("delete event", (done) => {
    request.delete({
      url: apiUrl + "/events/5001",
      json: true
    }, function (error, response, body) {
      done();
    });
  });

  it("delete User", function (done) {
    request.delete({ url: apiUrl + "/members/5001" });

    request.delete({ url: apiUrl + "/members/5002" });

    request.delete({ url: apiUrl + "/members/5003" },
      function (error, response, body) {
        done();
      });
  });



});
