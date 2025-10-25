export interface SourceDay {
  day: number;
  task: string;
  details: string;
  completed: boolean;
  notes: string;
}

export interface Week {
  week: number;
  days: Task[];
}

export interface Month {
  month: number;
  focus: string;
  weeks: Week[];
}

export interface Task {
  id: string;
  title: string;
  category: string;
  date: string;
  completed: boolean;
  details: string;
  notes: string;
}
