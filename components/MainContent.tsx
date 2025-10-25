
import React, { useState } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import Fab from './Fab';
import { Month } from '../types';

interface MainContentProps {
    months: Month[];
    loading: boolean;
    onToggleComplete: (taskId: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ months, loading, onToggleComplete }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex-1 p-8 relative">
            <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <main className="mt-8">
                <TaskList 
                  searchQuery={searchQuery} 
                  months={months} 
                  loading={loading}
                  onToggleComplete={onToggleComplete}
                />
            </main>
            <Fab />
        </div>
    );
};

export default MainContent;
