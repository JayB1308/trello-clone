export type Task = {
  id: string;
  title: string;
  description: string;
  assignedUser?: string;
  dueDate?: Date;
  listId: string;
};
