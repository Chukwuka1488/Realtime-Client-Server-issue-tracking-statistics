import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tasks 
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
// stories
import { StoryCreateComponent } from './components/stories/story-create/story-create.component';
import { StoryListComponent } from './components/stories/story-list/story-list.component';
import { StoryEditComponent } from './components/stories/story-edit/story-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'stories-list'},
  {path: 'create-story', component: StoryCreateComponent},
  {path: 'edit-story/:id', component: StoryEditComponent},
  {path: 'stories-list', component: StoryListComponent},
  {path: 'tasks-list', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
