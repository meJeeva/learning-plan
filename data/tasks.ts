import { Task, SourceDay, Month } from '../types';

const getFormattedDate = (dayOfYear: number): string => {
    const startDate = new Date(new Date().getFullYear(), 10, 1); // November 1st
    startDate.setDate(startDate.getDate() + dayOfYear - 1);
    return startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const categories = ['React Native', 'State Management', 'Performance', 'UI/UX', 'API', 'Testing', 'Deployment', 'Flutter', 'React.js', 'Backend'];

interface StudyPlanData {
    plan: {
        month: number;
        focus: string;
        weeks: {
            week: number;
            days: SourceDay[];
        }[];
    }[];
}

export const getTodoTasks = async (): Promise<Month[]> => {
    const response = await fetch('/data/data.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { plan: studyPlanData }: StudyPlanData = await response.json();

    const structuredTasks: Month[] = studyPlanData.map(month => ({
        ...month,
        weeks: month.weeks.map(week => ({
            ...week,
            days: week.days.map((day: SourceDay): Task => {
                return {
                    id: day.day.toString(),
                    title: day.task,
                    category: categories[(day.day - 1) % categories.length],
                    date: getFormattedDate(day.day),
                    completed: day.completed,
                    details: day.details,
                    notes: day.notes,
                };
            })
        }))
    }));

    return structuredTasks;
};
