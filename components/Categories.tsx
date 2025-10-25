
import React from 'react';
import { CATEGORIES } from '../constants';

const Categories = () => {
    return (
        <section>
            <h3 className="text-lg font-semibold text-gray-800">Recommended Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {CATEGORIES.map((category, index) => (
                    <button key={index} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                        {category.icon}
                        <span className="font-semibold text-gray-700">{category.name}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Categories;
