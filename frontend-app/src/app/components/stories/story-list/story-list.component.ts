import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/model/story';
import { Task } from 'src/app/model/task';
import { StoryApiService } from 'src/app/service/story-api.service';
import io from 'socket.io-client';


@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
  providers: [StoryApiService]
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [];
  tasks: Task[] = [];
  private socket: any;
 

  constructor(private storyApiService: StoryApiService) {}

  ngOnInit(): void {
    this.socket = io('http://localhost:9000');
    this.socket.on('connect', () => {
      // console.log('Connected to socket.io server');
      // Emit an event to the server to start receiving data
      this.socket.emit('newStory');
    });

    this.socket.on('newStory', (data: any) => {
      console.log('Received data:', data);
      // Update the stories and tasks with the received data
      this.stories = data.stories;
      this.tasks = data.tasks;
      
    });
    

    this.storyApiService.getAllStories().subscribe(stories => {

      this.stories = stories;
      this.tasks = stories.reduce((acc: Task[], curr: Story) => [...acc, ...curr.tasks], []);
    },
    error => {
      console.log("Error occurred while fetching stories:", error);
  });
  }

  // get the tasks for a given story
  getTasksForStory(storyId: string): Task[] {
    const storyTasks = this.tasks.filter(task => task.storyId === storyId);
    console.log("story tasks: ", storyTasks)
    return storyTasks
  }
}