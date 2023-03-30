import { Component, OnInit } from '@angular/core';
import { TaskApiService } from 'src/app/service/task-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskApiService: TaskApiService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskApiService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  createTask() {
    const newTask: Task = { status: 'Open', estimate: 5 };
    this.taskApiService.createTask(newTask).subscribe((result) => {
      console.log('Task created:', result);
      this.loadTasks();
    });
  }

}
