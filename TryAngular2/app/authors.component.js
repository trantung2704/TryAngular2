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
var authors_service_1 = require("./Services/authors.service");
var AuthorsComponent = (function () {
    function AuthorsComponent(authorServices) {
        this.title = "the title of AuthorPage";
        this.authors = authorServices.getAuthors();
    }
    AuthorsComponent = __decorate([
        core_1.Component({
            selector: 'authors',
            template: "<h2>Authors</h2>\n                {{title}}\n                <ul><li *ngFor=\"let author of authors\">{{author}}</li></ul>\n                ",
            providers: [authors_service_1.AuthorsService]
        }),
        __metadata("design:paramtypes", [authors_service_1.AuthorsService])
    ], AuthorsComponent);
    return AuthorsComponent;
}());
exports.AuthorsComponent = AuthorsComponent;
//# sourceMappingURL=authors.component.js.map