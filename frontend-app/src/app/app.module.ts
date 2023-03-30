import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryCreateComponent } from './components/stories/story-create/story-create.component';
import { StoryEditComponent } from './components/stories/story-edit/story-edit.component';
import { StoryListComponent } from './components/stories/story-list/story-list.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { TaskEditComponent } from './components/tasks/task-edit/task-edit.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryCreateComponent,
    StoryEditComponent,
    StoryListComponent,
    TaskCreateComponent,
    TaskEditComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
