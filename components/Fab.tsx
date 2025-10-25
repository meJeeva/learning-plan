import React from 'react';

const Fab = () => {
    return (
        <button 
            className="absolute bottom-8 right-8 bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            aria-label="Floating Action Button"
        >
            <img 
                src="https://i.ibb.co/TxC2kNKh/bunny.jpg" 
                alt="FAB icon" 
                className="w-12 h-12 rounded-full object-cover" 
            />
        </button>
    );
};

export default Fab;
