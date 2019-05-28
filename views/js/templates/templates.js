(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clubMeeting_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias4(((helper = (helper = helpers.datum || (depth0 != null ? depth0.datum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"datum","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.von || (depth0 != null ? depth0.von : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"von","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.bis || (depth0 != null ? depth0.bis : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bis","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.plz || (depth0 != null ? depth0.plz : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plz","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.ort || (depth0 != null ? depth0.ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ort","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.traktandenliste || (depth0 != null ? depth0.traktandenliste : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"traktandenliste","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"memberTable\" data-page-length='5'>\r\n    <thead>\r\n    <tr>\r\n        <th>Datum</th>\r\n        <th>Uhrzeit</th>\r\n        <th>Ort</th>\r\n        <th>Traktandenliste</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.clubMeeting : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['event_detail_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias4(((helper = (helper = helpers.Mitgliedname || (depth0 != null ? depth0.Mitgliedname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Mitgliedname","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Mitgliedvorname || (depth0 != null ? depth0.Mitgliedvorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Mitgliedvorname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.Adresse || (depth0 != null ? depth0.Adresse : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Adresse","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.PLZ || (depth0 != null ? depth0.PLZ : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLZ","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Ort || (depth0 != null ? depth0.Ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Ort","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>\r\n                <a href=\"mailto:some@email.com\" target=\"_blank\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n            </td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"event_detailTable\" data-page-length='15'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Ort</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.event : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['event_participant_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.vorname : stack1), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.strasse : stack1), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.plz : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.ort : stack1), depth0))
    + "</td>\r\n            <td>\r\n                <a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.email : stack1), depth0))
    + ";";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<table class=\"table table-sm table-hover\" id=\"eventParticipantsTable\" data-page-length='15'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Ort</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.participants : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n<a href=\"mailto:?bcc="
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.participants : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" class=\"btn btn-outline-primary btn-sm\">E-Mail an alle Teilnehmer</a>\r\n";
},"useData":true});
templates['event_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.datum || (depth0 != null ? depth0.datum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"datum","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.von || (depth0 != null ? depth0.von : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"von","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.bis || (depth0 != null ? depth0.bis : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bis","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.ort || (depth0 != null ? depth0.ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ort","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>\r\n                <a href=\"javascript:void(0);\" class=\"btn editEvent btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#editEventModal\" data-eventId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n                <button type=\"button\" class=\"deleteEvent btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#deleteConfirmationEventModal\" data-eventId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n                <a href=\"/events/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-outline-primary btn-sm mr-1\">Details</a>\r\n            </td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"eventTable\" data-page-length='10'>\r\n    <thead>\r\n    <tr>\r\n        <th>Anlass</th>\r\n        <th>Datum</th>\r\n        <th>Uhrzeit</th>\r\n        <th>Ort</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['group_detail_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <tr>\r\n                        <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.vorname : stack1), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.strasse : stack1), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.plz : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.ort : stack1), depth0))
    + "</td>\r\n                        <td>\r\n                            <a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitgliedid : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n                        </td>\r\n                    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\">Team Mitglieder</h6>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-sm table-hover\" id=\"group_detailTable\" data-page-length='15'>\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Adresse</th>\r\n                        <th>Stadt</th>\r\n                        <th></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['group_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <tr>\r\n        <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.verantwortlicher || (depth0 != null ? depth0.verantwortlicher : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"verantwortlicher","hash":{},"data":data}) : helper)))
    + "</td>\r\n\r\n            <td>\r\n                <a href=\"javascript:void(0);\" class=\"btn editTeam btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#editTeamModal\" data-teamId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n                <button type=\"button\" class=\"deleteTeam btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#deleteConfirmationTeamModal\" data-teamId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n                <a href=\"/teams/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-outline-primary btn-sm mr-1\">Details</a>\r\n            </td>\r\n    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"groupTable\" data-page-length='15'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Verantwortlicher</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.group : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['managingComittee_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.vorname || (depth0 != null ? depth0.vorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vorname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.strasse || (depth0 != null ? depth0.strasse : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strasse","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.plz || (depth0 != null ? depth0.plz : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plz","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.ort || (depth0 != null ? depth0.ort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ort","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>\r\n                <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n            </td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"managingComitteeTable\" data-page-length='5'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Stadt</th>\r\n        <th>Email</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.managingComittee : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
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
    + "</td>\r\n            <td>\r\n                <a href=\"javascript:void(0);\" class=\"btn editMember btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#editMemberModal\" data-memberId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n                <button type=\"button\" class=\"deleteMember btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#deleteConfirmationMemberModal\" data-memberId=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n                <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n            </td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"membersWithAddressTable\"  data-page-length='10'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Stadt</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
templates['member_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <tr>\r\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitglied : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitglied : depth0)) != null ? stack1.vorname : stack1), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitglied : depth0)) != null ? stack1.strasse : stack1), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitglied : depth0)) != null ? stack1.plz : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitglied : depth0)) != null ? stack1.ort : stack1), depth0))
    + "</td>\r\n            <td>"
    + alias2(((helper = (helper = helpers.mitgliederbeitrag || (depth0 != null ? depth0.mitgliederbeitrag : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"mitgliederbeitrag","hash":{},"data":data}) : helper)))
    + " CHF</td>\r\n            <td>\r\n                <a href=\"javascript:void(0);\" class=\"btn setPaymentstatus btn-success btn-sm\" data-memberId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitglied : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\r\n                    <i class=\"fas fa-check\"></i>\r\n                </a>\r\n                <a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mitglied : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" class=\"btn btn-outline-primary btn-sm\">E-Mail</a>\r\n            </td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"memberTable\" data-page-length='5'>\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Adresse</th>\r\n        <th>Stadt</th>\r\n        <th>Betrag</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"useData":true});
})();