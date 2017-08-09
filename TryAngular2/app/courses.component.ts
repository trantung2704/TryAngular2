import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CoursesService } from './Services/courses.service';

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>                {{title}}                <input type="text" autoGrow/>                <ul><li *ngFor="let course of courses">{{course}}</li></ul>
                `,
    providers: [CoursesService]
})
export class CoursesComponent {

    title = "the title of courses page";

    courses: string[];

    constructor(courseService: CoursesService) {
        this.courses = courseService.getCourses();
    }
}
