import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './courses/course.module';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HttpClientModule} from '@angular/common/http'

@NgModule({ 
  declarations: [
    AppComponent,
  ], 
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
