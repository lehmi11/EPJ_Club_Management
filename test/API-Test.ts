import { expect } from "chai";
import "mocha";
import request from "request";

let apiUrl = "http://127.0.0.1:3001/api";


describe("CRUD User", function () {

  it("create new User", (done) => {
    console.log(apiUrl + "/members");
    request.post({
      url: apiUrl + "/members",
      body: {
        geschlecht: "M",
        vorname: "Bla-vorname",
        name: "Bla-nachname",
        geburtsdatum: "1993-12-12",
        email: "",
        strasse: "Teststrasse 12",
        plz: "4123",
        ort: "nirgendwo",
      },
      json: true
    }, function (error, response, body) {
      done();
    });
  });

  it("return User", function (done) {
    console.log(apiUrl + "/members/1");
    request.get({ url: apiUrl + "/members/1" },
      function (error, response, body) {
        const bodyObj = JSON.parse(body);
        expect(bodyObj.name).to.equal("Reusser");
        expect(bodyObj.vorname).to.equal("Thomas");
        expect(bodyObj.geburtsdatum).to.equal("1991-03-05");
        expect(bodyObj.geschlecht).to.equal("M");
        expect(bodyObj.strasse).to.equal("Sonnenhof 4");
        expect(bodyObj.plz).to.equal(8853);
        expect(bodyObj.ort).to.equal("Lachen");
        expect(bodyObj.email).to.equal("t.reusser@hotmail.com");
        expect(bodyObj.istVorstand).to.equal(true);
        console.log(body);
        done();
      });
  });

  it("delete User", function (done) {
    console.log(apiUrl + "/members/65");
    request.delete({ url: apiUrl + "/members/71" },
      function (error, response, body) {
        console.log(body);
        done();
      });
  });


});
