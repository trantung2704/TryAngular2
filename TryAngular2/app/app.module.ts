import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';

import { AutoGrowDirective } from './Directives/autoGrow.directive';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective],
    bootstrap: [AppComponent],
})
export class AppModule { }
