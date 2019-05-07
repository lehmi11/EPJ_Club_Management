(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['event_detail_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <tr>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Mitgliedname || (depth0 != null ? depth0.Mitgliedname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Mitgliedname","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Mitgliedvorname || (depth0 != null ? depth0.Mitgliedvorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Mitgliedvorname","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Adresse || (depth0 != null ? depth0.Adresse : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Adresse","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.PLZ || (depth0 != null ? depth0.PLZ : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLZ","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Ort || (depth0 != null ? depth0.Ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Ort","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>\r\n            <a href=\"mailto:some@email.com\" target=\"_blank\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n        </td>\r\n    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"event_detailTable\" data-page-length='15'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Ort</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.event : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['event_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <tr>\r\n        <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.datum || (depth0 != null ? depth0.datum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"datum","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.von || (depth0 != null ? depth0.von : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"von","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.bis || (depth0 != null ? depth0.bis : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bis","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.ort || (depth0 != null ? depth0.ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ort","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>\r\n            <a href=\"/api/events/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-outline-primary btn-sm mr-1\">Details</a>\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#anmeldenModal\">Anmelden</button>\r\n        </td>\r\n    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"eventTable\" data-page-length='5'>\r\n    <thead>\r\n    <tr>\r\n        <th>Anlass</th>\r\n        <th>Datum</th>\r\n        <th>Uhrzeit</th>\r\n        <th>Ort</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['group_detail_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <tr>\r\n                        <td>"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Vorname || (depth0 != null ? depth0.Vorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Vorname","hash":{},"data":data}) : helper)))
    + "</td>\r\n                        <td>"
    + alias4(((helper = (helper = helpers.Adresse || (depth0 != null ? depth0.Adresse : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Adresse","hash":{},"data":data}) : helper)))
    + "</td>\r\n                        <td>"
    + alias4(((helper = (helper = helpers.PLZ || (depth0 != null ? depth0.PLZ : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLZ","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Ort || (depth0 != null ? depth0.Ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Ort","hash":{},"data":data}) : helper)))
    + "</td>\r\n                        <td>\r\n                            <a href=\"mailto:some@email.com\" target=\"_blank\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n                        </td>\r\n                    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\">Team Mitglieder</h6>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-sm table-hover\" id=\"group_detailTable\" data-page-length='15'>\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Adresse</th>\r\n                        <th>Stadt</th>\r\n                        <th></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['group_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

<<<<<<< HEAD
  return "        <tr>\r\n            <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.Anzahl || (depth0 != null ? depth0.Anzahl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Anzahl","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.verantwortlicher || (depth0 != null ? depth0.verantwortlicher : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"verantwortlicher","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>\r\n                <a href=\"/teams_detail\" class=\"btn btn-outline-primary btn-sm mr-1\">Details</a>\r\n                <a href=\"/teams_change\" class=\"btn btn-primary btn-sm\">Bearbeiten</a>\r\n            </td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"groupTable\" data-page-length='15'>\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Anzahl Mitglieder</th>\r\n            <th>Verantwortlicher</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
=======
  return "    <tr>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Anzahl || (depth0 != null ? depth0.Anzahl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Anzahl","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Verantwortlicher || (depth0 != null ? depth0.Verantwortlicher : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Verantwortlicher","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>\r\n            <a href=\"/teams_detail\" class=\"btn btn-outline-primary btn-sm mr-1\">Details</a>\r\n            <a href=\"/teams_change\" class=\"btn btn-primary btn-sm\">Bearbeiten</a>\r\n        </td>\r\n    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"groupTable\" data-page-length='15'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Anzahl Mitglieder</th>\r\n        <th>Verantwortlicher</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
>>>>>>> bca04e384f18c8923f7b51b3cdefe30a3a56c331
},"useData":true});
templates['membersWithAddress_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.vorname || (depth0 != null ? depth0.vorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vorname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.strasse || (depth0 != null ? depth0.strasse : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strasse","hash":{},"data":data}) : helper)))
    + "  </td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.plz || (depth0 != null ? depth0.plz : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plz","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.ort || (depth0 != null ? depth0.ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ort","hash":{},"data":data}) : helper)))
<<<<<<< HEAD
    + "</td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"membersWithAddressTable\"  data-page-length='10'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Stadt</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
=======
    + "</td>\r\n            <td>\r\n                <a href=\"javascript:void(0);\" class=\"editMember btn-primary btn-sm m-sm-1\" data-toggle=\"modal\" data-target=\"#editMemberModal\" data-memberId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0);\" class=\"deleteMember btn-danger btn-sm\" data-memberId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                </a>\r\n            </td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"membersWithAddressTable\"  data-page-length='10'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Stadt</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
>>>>>>> bca04e384f18c8923f7b51b3cdefe30a3a56c331
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['member_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias4(((helper = (helper = helpers.Nachname || (depth0 != null ? depth0.Nachname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Nachname","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Vorname || (depth0 != null ? depth0.Vorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Vorname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.Strasse || (depth0 != null ? depth0.Strasse : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Strasse","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.PLZ || (depth0 != null ? depth0.PLZ : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLZ","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.ORT || (depth0 != null ? depth0.ORT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ORT","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.Betrag || (depth0 != null ? depth0.Betrag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Betrag","hash":{},"data":data}) : helper)))
    + " CHF</td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

<<<<<<< HEAD
  return "<table class=\"table table-sm table-hover\" id=\"memberTable\" data-page-length='6'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Stadt</th>\r\n        <th>Betrag</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
=======
  return "<table class=\"table table-sm table-hover\" id=\"memberTable\" data-page-length='5'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Stadt</th>\r\n        <th>Betrag</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
>>>>>>> bca04e384f18c8923f7b51b3cdefe30a3a56c331
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
})();