import { expect } from "chai";
import "mocha";
import request from "request";

const apiUrl = "http://127.0.0.1:3001/api";

describe("get an existend User", () => {

  it("should return Thomas Reusser with id 1", (done) => {
    request.get({ url: apiUrl + "/members/1" },
      (body) => {
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

describe("CRUD User", () => {

  beforeEach((done) => {
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
      json: true,
    }).on("response", () => {
      done();
    });
  });

  afterEach(() => {
    request.delete({ url: apiUrl + "/members/5000" });
  });

  it("should return Test-User by id", (done) => {
    request.get({ url: apiUrl + "/members/5000" },
      (body) => {
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

  it("should return Test-User by name", (done) => {
    request.get({ url: apiUrl + "/members/name/Test-Nachname" },
      (body) => {
        const bodyObj = JSON.parse(body);
        expect(bodyObj[0].name).to.equal("Test-Nachname");
        expect(bodyObj[0].vorname).to.equal("Test-Vorname");
        expect(bodyObj[0].geburtsdatum).to.equal("1993-12-12");
        expect(bodyObj[0].geschlecht).to.equal("M");
        expect(bodyObj[0].strasse).to.equal("Teststrasse 12");
        expect(bodyObj[0].plz).to.equal(4123);
        expect(bodyObj[0].ort).to.equal("nirgendwo");
        expect(bodyObj[0].email).to.equal("test@test.ch");
        done();
      });
  });
});


describe("should change an event", () => {

  beforeEach((done) => {
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
    });

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
        traktandenliste: null,
        verantwortlicher: null,
      },
      json: true,
    });

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
    }).on("response", () => {
      done();
    });
  });

  afterEach(() => {
    request.delete({ url: apiUrl + "/members/5001" });
    request.delete({ url: apiUrl + "/members/5002" });
    request.delete({ url: apiUrl + "/members/5003" });
    request.delete({ url: apiUrl + "/events/5001" });
  });

  it("should return the change attributes of Test-Event", () => {
    request.get({ url: apiUrl + "/events/5001" },
      (body) => {
        const bodyObj = JSON.parse(body);
        expect(bodyObj.id).to.equal(5001);
        expect(bodyObj.datum).to.equal("2019-08-08");
        expect(bodyObj.von).to.equal("15:15");
        expect(bodyObj.bis).to.equal("18:15");
        expect(bodyObj.ort).to.equal("Buchs");
        expect(bodyObj.name).to.equal("Test-Changed-Event");
        expect(bodyObj.beschreibung).to.equal("kleinstes Fest, das es jemals gab");
      });
  });
});

describe("should assign Test-Users to event", () => {

  beforeEach((done) => {
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
    });

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
        traktandenliste: null,
        verantwortlicher: null,
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5001,
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5002,
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5003,
      },
      json: true,
    }).on("response", () => {
      done();
    });
  });

  afterEach(() => {
    request.delete({ url: apiUrl + "/members/5001" });
    request.delete({ url: apiUrl + "/members/5002" });
    request.delete({ url: apiUrl + "/members/5003" });
    request.delete({ url: apiUrl + "/events/5001" });
  });

  it("should return three participants of the event", () => {
    request.get({ url: apiUrl + "/events/participants/5001" },
      (body) => {
        const bodyObj = JSON.parse(body);
        expect(bodyObj).to.have.lengthOf(3);
        expect(bodyObj[0].mitgliedid.vorname).to.equal("Test-Vorname01");
        expect(bodyObj[0].mitgliedid.name).to.equal("Test-Nachname01");
        expect(bodyObj[1].mitgliedid.vorname).to.equal("Test-Vorname02");
        expect(bodyObj[1].mitgliedid.name).to.equal("Test-Nachname02");
        expect(bodyObj[2].mitgliedid.vorname).to.equal("Test-Vorname03");
        expect(bodyObj[2].mitgliedid.name).to.equal("Test-Nachname03");
      });
  });
});

describe("should delete one of three Test-Users of an event", () => {

  beforeEach((done) => {
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
    });

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
        traktandenliste: null,
        verantwortlicher: null,
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5001,
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5002,
      },
      json: true,
    });

    request.post({
      url: apiUrl + "/events/participants/5001",
      body: {
        id: 5003,
      },
      json: true,
    });

    request.delete({
      url: apiUrl + "/events/participants/5001/member/5003",
      json: true,
    }).on("response", () => {
      done();
    });

  });

  afterEach(() => {
    request.delete({ url: apiUrl + "/members/5001" });
    request.delete({ url: apiUrl + "/members/5002" });
    request.delete({ url: apiUrl + "/members/5003" });
    request.delete({ url: apiUrl + "/events/5001" });
  });

  it("should return only two participants of the event", () => {
    request.get({ url: apiUrl + "/events/participants/5001" },
      (body) => {
        const bodyObj = JSON.parse(body);
        expect(bodyObj).to.have.lengthOf(2);
        expect(bodyObj[0].mitgliedid.vorname).to.equal("Test-Vorname01");
        expect(bodyObj[0].mitgliedid.name).to.equal("Test-Nachname01");
        expect(bodyObj[1].mitgliedid.vorname).to.equal("Test-Vorname02");
        expect(bodyObj[1].mitgliedid.name).to.equal("Test-Nachname02");
      });
  });

});



