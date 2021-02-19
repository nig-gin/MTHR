export interface jourInterface {
  category: {
    id: number;
    title: string;
    color: string;
    completedCount: number;
    uncompletedCount: number;
  };
  completed: boolean;
  date: Date;
  id: string;
    priority: {
      color: string;
      id: number;
      title: string;
    };
  title: string;


}
