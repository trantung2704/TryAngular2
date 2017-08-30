import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CoursesService } from './Services/courses.service';

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
                {{title}}
                <input type="text" autoGrow/>                <button class="btn btn-primary"                     [class.active]="isActive"                      [style.background-color]="isActive? 'red':'blue'"                    on-click="onClick($event)">test</button>                <input type="text" [(ngModel)]="title"/>                <ul><li *ngFor="let course of courses">{{course}}</li></ul>
                `,
    providers: [CoursesService]
})
export class CoursesComponent {

    title = "the title of courses page";

    isActive = true;

    imageUrl = 'http://www.kawasaki.co.th/uploads/products/z300/kw-z300_grn2.jpg';

    courses: string[];

    onClick($event) {
        console.log("click", $event);
    }

    constructor(courseService: CoursesService) {
        this.courses = courseService.getCourses();
    }
}
