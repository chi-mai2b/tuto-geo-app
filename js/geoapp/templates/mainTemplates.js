define(["handlebars.runtime"],function(a){a=a["default"];var e=a.template,n=a.templates=a.templates||{};return n["_countryNameView.hbs"]=e({compiler:[5,">= 2.0.0"],main:function(){return'<div class="panel">\r\n    <div class="mr-geoappMain-countryName panel-body">Country name will be displayed here</div>\r\n</div>'},useData:!0}),n["_mainLayout.hbs"]=e({compiler:[5,">= 2.0.0"],main:function(){return'<div class="mr-geoappMain">\r\n    <div class="mr-geoappMain-countryNameHolder"></div>\r\n    <div class="mr-geoappMain-mapHolder"></div>\r\n</div>'},useData:!0}),n["_mapView.hbs"]=e({compiler:[5,">= 2.0.0"],main:function(){return'<div class="mr-geoappMain-mapPanel panel panel-default">\r\n    <div class="mr-geoappMain-mapPanel-header panel-heading">\r\n        <h3 class="panel-title">Geo Map</h3>\r\n    </div>\r\n    <div class="panel-body mr-geoappMain-map"></div>\r\n</div>'},useData:!0}),n});