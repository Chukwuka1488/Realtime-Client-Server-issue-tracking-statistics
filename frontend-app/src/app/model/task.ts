export class Task {
  _id?: string;
  title: string = '';
  description: string = '';
  estimate: number = 0;
  timeSpent: number = 0;
  // storyId?: string = '';

  constructor(taskObj: {title: string, description: string, estimate: number, timeSpent: number, storyId?: string}) {
    this.title = taskObj.title;
    this.description = taskObj.description;
    this.estimate = taskObj.estimate;
    this.timeSpent = taskObj.timeSpent;
    // this.storyId = taskObj.storyId;
  }
}
