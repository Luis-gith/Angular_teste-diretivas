import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HighlighterDirective } from './shared/directives/highlighter.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ListApiComponent } from './shared/list-api/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    ListPeopleComponent,
    ListApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule { }
