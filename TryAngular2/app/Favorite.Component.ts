import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'star',
    templateUrl: 'app/Templates/favorite.template.html',
    providers: [],
    inputs: ['isFavorite']
})
export class FavoriteComponent {

    isFavorite = true;

    @Output() updated = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.updated.emit({ message: "Send from Favorite component"});
    }
}
