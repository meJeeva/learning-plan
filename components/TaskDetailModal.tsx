import React from 'react';
import { Task } from '../types';

interface TaskDetailModalProps {
    task: Task;
    onClose: () => void;
}

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({ task, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl p-8 m-4 max-w-lg w-full transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Task Details</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="space-y-5">
                    <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Task</p>
                        <p className="text-lg text-gray-800">{task.title}</p>
                    </div>
                     <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Details</p>
                        <p className="text-lg text-gray-800">{task.details}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Category</p>
                        <p className="text-lg text-gray-800">{task.category}</p>
                    </div>
                     <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Date</p>
                        <p className="text-lg text-gray-800">{task.date}</p>
                    </div>
                     <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Status</p>
                        <p className={`text-lg font-semibold ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                            {task.completed ? 'Completed' : 'Pending'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailModal;
