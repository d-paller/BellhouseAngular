"use strict";
var router_1 = require("@angular/router");
var homeContent_1 = require("./body/content/home/homeContent");
var lunchComponent_1 = require("./body/content/Menus/Lunch/lunchComponent");
var dinnerComponent_1 = require("./body/content/Menus/dinner/dinnerComponent");
var appRoutes = [
    { path: '', component: homeContent_1.HomeComponent },
    { path: 'lunch', component: lunchComponent_1.LunchComponent },
    { path: 'dinner', component: dinnerComponent_1.DinnerComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map