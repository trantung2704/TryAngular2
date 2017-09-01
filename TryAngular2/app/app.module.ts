import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';

import { AutoGrowDirective } from './Directives/autoGrow.directive';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, CoursesComponent, AuthorsComponent, FavoriteComponent, AutoGrowDirective],
    bootstrap: [AppComponent],
})
export class AppModule { }
