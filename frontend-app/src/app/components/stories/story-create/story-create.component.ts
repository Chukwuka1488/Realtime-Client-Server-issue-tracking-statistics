import { Component } from '@angular/core';
import { Story } from 'src/app/model/story';
import { Task } from 'src/app/model/task';
import { StoryApiService } from 'src/app/service/story-api.service';

@Component({
  selector: 'app-story-create',
  templateUrl: './story-create.component.html',
  styleUrls: ['./story-create.component.css']
})
export class StoryCreateComponent {

  story: Story = new Story();

  constructor(
    private storyApiService: StoryApiService
    ) { }

  ngOnInit(): void {}

  private createRandomTasks(): Task[] {
    const numTasks = Math.floor(Math.random() * 10) + 1; // generate a random number of tasks between 1 and 10
    const tasks = [];
    for (let i = 0; i < numTasks; i++) {
      const task = new Task({
        title: `Task ${i+1} for ${this.story.title}`,
        description: `Description for Task ${i+1}`,
        estimate: Math.floor(Math.random() * 10) + 1, // generate a random estimate between 1 and 10
        timeSpent: Math.floor(Math.random() * 10) + 1,
        // storyId: this.story._id,
      });
      tasks.push(task);
    }
    return tasks;
  }

  onSubmit() {
    console.log("check 1")
    this.story.tasks = this.createRandomTasks();
    console.log("check 2", this.story.tasks)
    console.log("check after generating")
    this.story.status = 'Open';
    console.log("check xxx", this.story)
    console.log("check 3")
    this.storyApiService.createStory(this.story).subscribe(
      res => {
        console.log("check 4")
        console.log('Story created successfully', res);
        console.log("check 5")
      },
      err => {
        console.log('Error creating story', err);
      }
    );
  }
}
