(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['member_table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\n            <td>"
    + alias4(((helper = (helper = helpers.Nachname || (depth0 != null ? depth0.Nachname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Nachname","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.Vorname || (depth0 != null ? depth0.Vorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Vorname","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.Strasse || (depth0 != null ? depth0.Strasse : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Strasse","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.PLZ || (depth0 != null ? depth0.PLZ : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PLZ","hash":{},"data":data}) : helper)))
    + " </td>\n            <td>"
    + alias4(((helper = (helper = helpers.ORT || (depth0 != null ? depth0.ORT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ORT","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.Betrag || (depth0 != null ? depth0.Betrag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Betrag","hash":{},"data":data}) : helper)))
    + " CHF</td>\n        </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-sm table-hover\" id=\"memberTable\" data-page-length='6'>\n    <thead>\n    <tr>\n        <th>Name</th>\n        <th>Adresse</th>\n        <th>Stadt</th>\n        <th>Betrag</th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
})();