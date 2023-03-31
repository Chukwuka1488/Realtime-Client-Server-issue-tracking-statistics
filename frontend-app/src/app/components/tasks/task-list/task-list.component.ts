import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskApiService } from 'src/app/service/task-api.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any;

  constructor(private taskApiService: TaskApiService) { }

  ngOnInit(): void {
    this.taskApiService.getAllTasks().subscribe(tasks => {
      console.log("checking 1", tasks);
      this.tasks = tasks;
      console.log("checking 2", tasks);
      this.taskApiService.getAllTasks().subscribe(tasks => {
        console.log("checking 3", tasks);
        this.tasks = tasks;
        console.log("checking 4", tasks);
      },
      error => {
        console.log("Error occurred while fetching tasks:", error);
      });
    },
    error => {
      console.log("Error occurred while fetching stories:", error);
  });
  }

  // get the tasks
  getTaskById(taskId: string): any {
      return this.tasks.find((task: { _id: string; }) => task._id === taskId);
    }
}
