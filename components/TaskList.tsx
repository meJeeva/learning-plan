
import React, { useState, useMemo } from 'react';
import TaskItem from './TaskItem';
import TaskDetailModal from './TaskDetailModal';
import { Task, Month } from '../types';

interface TaskListProps {
    searchQuery: string;
    months: Month[];
    loading: boolean;
    onToggleComplete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ searchQuery, months, loading, onToggleComplete }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleTaskClick = (task: Task) => {
        setSelectedTask(task);
    };

    const handleCloseModal = () => {
        setSelectedTask(null);
    };
    
    const filteredMonths = useMemo(() => {
        if (!searchQuery.trim()) {
          return months;
        }
        return months
          .map(month => ({
            ...month,
            weeks: month.weeks
              .map(week => ({
                ...week,
                days: week.days.filter(task =>
                  task.title.toLowerCase().includes(searchQuery.toLowerCase())
                ),
              }))
              .filter(week => week.days.length > 0),
          }))
          .filter(month => month.weeks.length > 0);
    }, [months, searchQuery]);

    return (
        <section className="mt-8">
            {loading ? (
                <div className="mt-6 p-4 text-center text-gray-500">Loading ToDo tasks...</div>
            ) : (
                filteredMonths.length > 0 ? (
                    filteredMonths.map(month => (
                        <div key={month.month} className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 my-4 pb-2 border-b-2 border-gray-100">{month.focus}</h3>
                            {month.weeks.map(week => (
                                <div key={week.week} className="mb-6">
                                     <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 mt-4">Week {week.week}</h4>
                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {week.days.map(task => (
                                            <TaskItem
                                                key={task.id}
                                                task={task}
                                                onToggleComplete={onToggleComplete}
                                                onTaskClick={handleTaskClick}
                                            />
                                        ))}
                                     </div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                     <div className="mt-6 p-4 text-center text-gray-500">No tasks found.</div>
                )
            )}
            {selectedTask && (
                <TaskDetailModal task={selectedTask} onClose={handleCloseModal} />
            )}
        </section>
    );
};

export default TaskList;