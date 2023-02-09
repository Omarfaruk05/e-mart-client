import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [drawer, setDrawer] = useState(true)
    return (
        <div>
            <div>
                <div className='flex gap-2'>
                    {/* sidebar  */}
                    <div>
                        
                    </div>
                    <div className='max-w-7xl'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;