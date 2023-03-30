import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryCreateComponent } from './components/story-create/story-create.component';
import { StoryEditComponent } from './components/story-edit/story-edit.component';
import { StoryListComponent } from './components/story-list/story-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryCreateComponent,
    StoryEditComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
