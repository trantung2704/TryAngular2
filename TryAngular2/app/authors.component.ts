﻿import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AuthorsService } from './Services/authors.service';

@Component({
    selector: 'authors',


    template: `<h2>Authors</h2>
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