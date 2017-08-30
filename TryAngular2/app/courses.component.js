"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var courses_service_1 = require("./Services/courses.service");
var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.title = "the title of courses page";
        this.isActive = true;
        this.imageUrl = 'http://www.kawasaki.co.th/uploads/products/z300/kw-z300_grn2.jpg';
        this.courses = courseService.getCourses();
    }
    CoursesComponent.prototype.onClick = function ($event) {
        console.log("click", $event);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "<h2>Courses</h2>\n                {{title}}\n                <input type=\"text\" autoGrow/>\n                <button class=\"btn btn-primary\" \n                    [class.active]=\"isActive\"  \n                    [style.background-color]=\"isActive? 'red':'blue'\"\n                    on-click=\"onClick($event)\">test</button>\n                <input type=\"text\" [(ngModel)]=\"title\"/>\n                <ul><li *ngFor=\"let course of courses\">{{course}}</li></ul>\n                ",
            providers: [courses_service_1.CoursesService]
        }),
        __metadata("design:paramtypes", [courses_service_1.CoursesService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map