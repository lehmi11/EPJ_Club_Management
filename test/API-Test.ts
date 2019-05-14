import { expect } from "chai";
import "mocha";
import request from "request";

let apiUrl = "http://127.0.0.1:3001/api";


var jsonDataObj = { 'mes': 'hey dude', 'yo': ['im here', 'and here'] };
request.post({
  url: 'https://api.site.com',
  body: jsonDataObj,
  json: true
}, function (error, response, body) {
  console.log(body);
});


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
      console.log(body);
    });

    /*
    })
      .send(JSON.stringify({
        geschlecht: "M",
        vorname: "Test-vorname",
        name: "Test-nachname",
        geburtsdatum: "1993-12-12",
        email: "",
        strasse: "Teststrasse 12",
        plz: "4123",
        ort: "nirgendwo",
      })
      )
      */
      .then((res) => {
      const body = res.body;
      expect(body).to.property("id");
      expect(body).to.property("name");
      expect(body).to.property("plz");

      done();
    })
      .catch((err) => done(err));
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
        expect(bodyObj.plz).to.equal("8853");
        expect(bodyObj.ort).to.equal("Lachen");
        expect(bodyObj.email).to.equal("t.reusser@hotmail.com");
        expect(bodyObj.istVorstand).to.equal("true");
        console.log(body);
        done();
      });
  });
});
