﻿import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CoursesService } from './Services/courses.service';

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
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