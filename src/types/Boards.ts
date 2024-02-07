export interface ISubtask  {
  _id: string;
  name: string;
  status: boolean;
}

export interface ITask {
  _id: string;
  name: string;
  column: string;
  subtasks: ISubtask[];
  description?: string;
}

export interface IBoards {
  _id: string;
  user_id: string;
  name: string;
  columns: string[];
  tasks: ITask[];
}
