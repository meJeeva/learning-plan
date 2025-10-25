import React from 'react';
import { Task } from '../types';

const CalendarIcon = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66675 1.66663V4.16663" stroke="#667085" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.3333 1.66663V4.16663" stroke="#667085" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.91675 7.57501H17.0834" stroke="#667085" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 7.08331V14.1666C17.5 16.6666 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6666 2.5 14.1666V7.08331C2.5 4.58331 3.75 2.91663 6.66667 2.91663H13.3333C16.25 2.91663 17.5 4.58331 17.5 7.08331Z" stroke="#667085" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0752 11.4166H13.0835" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0752 14.4166H13.0835" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99609 11.4166H10.0044" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99609 14.4166H10.0044" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91699 11.4166H6.92532" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91699 14.4166H6.92532" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;

interface TaskItemProps {
    task: Task;
    onToggleComplete: (taskId: string) => void;
    onTaskClick: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onTaskClick }) => {
    
    const handleCheckboxClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggleComplete(task.id);
    };

    const handleContainerClick = () => {
        onTaskClick(task);
    }
    
    return (
        <div 
            className={`bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-start gap-4 cursor-pointer transition-opacity ${task.completed ? 'opacity-60' : ''}`}
            onClick={handleContainerClick}
        >
            <div className="flex items-center h-full pt-1" onClick={handleCheckboxClick}>
                 <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h5 className={`font-bold text-gray-800 ${task.completed ? 'line-through' : ''}`}>{task.title}</h5>
                        <p className="text-sm text-gray-500">{task.category}</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-start mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5 font-medium">
                        <CalendarIcon />
                        <span>{task.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;