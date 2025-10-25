import React from 'react';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

interface HeaderProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
    return (
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">My Task</h2>
                <p className="text-md text-gray-500 mt-1">Hello, Jeeva! Let's get your tasks done.</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative w-80">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search tasks..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="flex items-center gap-4">
                     <a href="#" className="w-10 h-10 rounded-full hover:opacity-90 transition-opacity">
                        <img 
                            src="https://i.ibb.co/TxC2kNKh/bunny.jpg" 
                            alt="Profile" 
                            className="w-full h-full rounded-full object-cover" 
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;