import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AuthorsService } from './Services/authors.service';

@Component({
    selector: 'authors',


    template: `<h2>Authors</h2>                {{title}}                <ul><li *ngFor="let author of authors">{{author}}</li></ul>
                `,

    providers: [AuthorsService]
})
export class AuthorsComponent {

    title = "the title of AuthorPage";

    authors: string[];

    constructor(authorServices: AuthorsService) {
        this.authors = authorServices.getAuthors();
    }
}
