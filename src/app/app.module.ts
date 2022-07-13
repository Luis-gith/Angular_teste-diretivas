import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlighterDirective } from './shared/directives/highlighter.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { ListApiComponent } from './components/list-api/list-api.component';

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
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule { }
