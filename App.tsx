
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Month } from './types';
import { getTodoTasks } from './data/tasks';

function App() {
  const [months, setMonths] = useState<Month[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
        try {
            const initialData = await getTodoTasks();
            setMonths(initialData);
        } catch (error) {
            console.error("Error loading tasks:", error);
        } finally {
            setLoading(false);
        }
    };
    loadTasks();
  }, []);

  const handleToggleComplete = (taskId: string) => {
    setMonths(prevMonths =>
        prevMonths.map(month => ({
            ...month,
            weeks: month.weeks.map(week => ({
                ...week,
                days: week.days.map(task =>
                    task.id === taskId ? { ...task, completed: !task.completed } : task
                )
            }))
        }))
    );
  };

  const incompleteTasksCount = useMemo(() => {
    return months.reduce((count, month) => 
      count + month.weeks.reduce((weekCount, week) => 
        weekCount + week.days.filter(task => !task.completed).length, 0), 0);
  }, [months]);

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg flex min-h-[90vh]">
        <Sidebar taskCount={incompleteTasksCount} />
        <MainContent 
          months={months} 
          loading={loading}
          onToggleComplete={handleToggleComplete} 
        />
      </div>
    </div>
  );
}

export default App;
