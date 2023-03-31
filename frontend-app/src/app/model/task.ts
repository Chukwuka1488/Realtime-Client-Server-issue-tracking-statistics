export class Task {
  _id?: string;
  title: string = '';
  description: string = '';
  estimate: number = 0;
  timeSpent: number = 0;
  status: 'Open' | 'In Progress' | 'Done' = 'Open';
  storyId?: string = '';

  constructor(taskObj: {title: string, description: string, estimate: number, timeSpent: number, status?: 'Open' | 'In Progress' | 'Done', storyId?: string}) {
    this.title = taskObj.title;
    this.description = taskObj.description;
    this.estimate = taskObj.estimate;
    this.timeSpent = taskObj.timeSpent;
    if (taskObj.status) {
      this.status = taskObj.status;
    }
    this.storyId = taskObj.storyId;
  }
}
