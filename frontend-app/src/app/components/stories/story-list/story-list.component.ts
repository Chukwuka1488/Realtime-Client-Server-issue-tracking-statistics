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

    // Set up socket listener for new stories and tasks
    // this.socket.on('newStory', (newStory: Story) => {
    //   console.log("checkers", newStory)
    //   this.stories.push(newStory);
    //   console.log("checkers dead", this.stories)
    // });

    // this.socket.on('newTask', (newTask: Task) => {
    //   this.tasks.push(newTask);
    // });

    // // Set up socket listener for story updates
    // this.socket.on('updateStory', (updatedStory: Story) => {
    //   const index = this.stories.findIndex(story => story._id === updatedStory._id);
    //   if (index !== -1) {
    //     this.stories[index] = updatedStory;
    //     console.log('Updated story:', updatedStory);
    //   }
    // });

    // // Set up socket listener for task updates
    // this.socket.on('updateTask', (updatedTask: Task) => {
    //   const storyIndex = this.stories.findIndex(story => story._id === updatedTask.storyId);
    //   if (storyIndex !== -1) {
    //     const taskIndex = this.stories[storyIndex].tasks.findIndex(task => task._id === updatedTask._id);
    //     if (taskIndex !== -1) {
    //       this.stories[storyIndex].tasks[taskIndex] = updatedTask;
    //       this.tasks = this.stories.reduce((acc: Task[], curr: Story) => [...acc, ...curr.tasks], []);
    //       console.log('Updated task:', updatedTask);
    //     }
    //   }
    // });
  }

  // get the tasks for a given story
  getTasksForStory(storyId: string): Task[] {
    const storyTasks = this.tasks.filter(task => task.storyId === storyId);
    console.log("story tasks: ", storyTasks)
    return storyTasks
  }
}