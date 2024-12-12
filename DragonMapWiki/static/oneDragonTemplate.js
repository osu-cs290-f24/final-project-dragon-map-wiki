(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['oneDragon'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"post\">\n    <div class=\"post-contents\">  \n        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"dragonName") || (depth0 != null ? lookupProperty(depth0,"dragonName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dragonName","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":26}}}) : helper)))
    + "</h3>            \n        <div class=\"post-image-container\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photo_url") || (depth0 != null ? lookupProperty(depth0,"photo_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo_url","hash":{},"data":data,"loc":{"start":{"line":5,"column":22},"end":{"line":5,"column":35}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"dragonName") || (depth0 != null ? lookupProperty(depth0,"dragonName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dragonName","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":56}}}) : helper)))
    + "\">\n        </div>\n        <div class=\"description-container\">\n            <p>\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"dragon_description") || (depth0 != null ? lookupProperty(depth0,"dragon_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dragon_description","hash":{},"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":38}}}) : helper)))
    + "\n            </p>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();