import { Task } from './task';
export class Story {
  _id?: string;
  title: string = '';
  description: string = '';
  status: string = '';
  tasks: Task[] = [];

  constructor(story: Story = {} as Story) {
    const {
      _id = '',
      title = '',
      description = '',
      status = '',
      tasks = [],
    } = story;

    this._id = _id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.tasks = tasks;
  }
}