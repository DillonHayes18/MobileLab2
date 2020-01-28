export interface tasksInterface{
     addTask(task: string): number;
     listAllTasks(): void;
     deleteTasks(task: string): number;
     myTasksArray: Array<string>;
}