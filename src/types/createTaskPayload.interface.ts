export interface CreateTaskPayload {
  title: string;
  description: string;
  assignedUser?: string;
  dueDate?: Date;
  listId: string;
}
