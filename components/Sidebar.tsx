import React from 'react';
import { NAV_ITEMS } from '../constants';

interface SidebarProps {
    taskCount: number;
}

// FIX: Define an interface for navigation items with an optional 'count' property.
// This ensures type safety and resolves errors when accessing 'item.count' on a union type.
interface NavItem {
    name: string;
    icon: React.ReactElement;
    active: boolean;
    count?: number;
}


const Sidebar: React.FC<SidebarProps> = ({ taskCount }) => {
    const navItemsWithCount: NavItem[] = NAV_ITEMS.map(item => {
        if (item.name === 'My Task') {
            return { ...item, count: taskCount };
        }
        return item;
    });

    return (
        <aside className="w-[260px] p-6 flex flex-col border-r border-gray-200">
            <h1 className="text-3xl font-black text-gray-900">Sundays.</h1>
            <nav className="mt-10 flex-grow">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</h2>
                <ul className="mt-4 space-y-1">
                    {navItemsWithCount.map((item) => (
                        <li key={item.name}>
                            <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-all group ${item.active ? 'active bg-gradient-to-r from-[#e9e6ff] to-[#f3f0ff] !text-black border-l-4 border-purple-600' : ''}`}>
                                {item.icon}
                                <span className="flex-1">{item.name}</span>
                                {item.count && item.count > 0 && (
                                    <span className="bg-[#E8E6FF] text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full">{item.count}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;