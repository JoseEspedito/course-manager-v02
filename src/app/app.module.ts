import { CourseInfoComponent } from './courses/course-info.component';
import { Error404Componennt } from './error-404/error-404.componet';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StarComponent } from './star/star.component';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Componennt,
    CourseInfoComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Componennt
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
