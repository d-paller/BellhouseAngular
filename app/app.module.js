"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var navComponent_1 = require("./nav/navComponent");
var featureComponent_1 = require("./body/feature/featureComponent");
var homeContent_1 = require("./body/content/home/homeContent");
var footer_1 = require("./footer/footer");
var lunchComponent_1 = require("./body/content/Menus/Lunch/lunchComponent");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.routes)],
        declarations: [
            app_component_1.AppComponent,
            navComponent_1.NavComponent,
            featureComponent_1.FeatureComponent,
            homeContent_1.HomeComponent,
            footer_1.FooterComponent,
            lunchComponent_1.LunchComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map