import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/model/story';
import { Task } from 'src/app/model/task';
import { StoryApiService } from 'src/app/service/story-api.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [];
  tasks: Task[] = [];

  constructor(private storyApiService: StoryApiService) { }

  ngOnInit(): void {
    this.storyApiService.getAllStories().subscribe(stories => {
      console.log("checking 1", stories);
      this.stories = stories;
      console.log("checking 2", stories);
      this.tasks = stories.reduce((acc: Task[], curr: Story) => [...acc, ...curr.tasks], []);
      console.log("checking for tasks", this.tasks);
    },
    error => {
      console.log("Error occurred while fetching stories:", error);
  });
  }
// get the tasks
getTaskById(taskId: string): Task | undefined {
  return this.tasks.find(task => task._id === taskId);
}
}
