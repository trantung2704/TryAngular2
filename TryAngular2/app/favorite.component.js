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
var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.isFavorite = true;
        this.updated = new core_1.EventEmitter();
    }
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        this.updated.emit({ message: "Send from Favorite component" });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FavoriteComponent.prototype, "updated", void 0);
    FavoriteComponent = __decorate([
        core_1.Component({
            selector: 'star',
            templateUrl: 'app/Templates/favorite.template.html',
            providers: [],
            inputs: ['isFavorite']
        })
    ], FavoriteComponent);
    return FavoriteComponent;
}());
exports.FavoriteComponent = FavoriteComponent;
//# sourceMappingURL=favorite.component.js.map