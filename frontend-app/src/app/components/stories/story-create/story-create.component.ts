import { Component } from '@angular/core';
import { Story } from 'src/app/model/story';
import { Task } from 'src/app/model/task';
import { StoryApiService } from 'src/app/service/story-api.service';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-story-create',
  templateUrl: './story-create.component.html',
  styleUrls: ['./story-create.component.css']
})
export class StoryCreateComponent {
  story: Story = new Story();
  socket: Socket;
  timer: any;
  isCreatingStories = false;


  constructor(private storyApiService: StoryApiService) {
    this.socket = io('http://localhost:9000');

    // listen for 'data' event from server
    this.socket.on('data', (data: any) => {
      // handle received data here
      console.log('Received data:', data);
    });
  }

  generateTasks(): void {
    this.story.tasks = this.createRandomTasks();
  }

  ngOnInit(): void { }

  startCreatingStories() {
    if (!this.isCreatingStories) {
      this.isCreatingStories = true;
      this.timer = setInterval(() => {
        const story = new Story();
        story.title = `Story ${Math.floor(Math.random() * 100) + 1}`; // generate a random story title
        story.description = `Description for ${story.title}`,
        story.tasks = this.createRandomTasks();
        story.status = 'Open';
        this.socket.emit('newStory', story); // emit a 'newStory' event with the story data
        this.storyApiService.createStory(story).subscribe(
          res => {
            console.log('Story created successfully', res);
          },
          err => {
            console.log('Error creating story', err);
          }
        );
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    // stop the timer when the component is destroyed
    clearInterval(this.timer);
  }

  stopCreatingStories() {
    this.isCreatingStories = false;
    clearInterval(this.timer);
    console.log("Stop creating stories")
  }

  private createRandomTasks(): Task[] {
    const numTasks = Math.floor(Math.random() * 10) + 1; // generate a random number of tasks between 1 and 10
    const tasks = [];
    for (let i = 0; i < numTasks; i++) {
      const task = new Task({
        title: `Task ${i+1}`,
        description: `Description for Task ${i+1}`,
        estimate: Math.floor(Math.random() * 10) + 1, // generate a random estimate between 1 and 10
        timeSpent: Math.floor(Math.random() * 10) + 1,
        // storyId: this.story._id,
      });
      tasks.push(task);
    }
    return tasks;
  }
}
