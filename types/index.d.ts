export interface Task {
  id: string;
  title: string | undefined;
  completed: boolean;
}

export interface TodoState {
  tasks: Task[];
}
