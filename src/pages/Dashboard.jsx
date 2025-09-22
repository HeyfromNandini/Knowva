import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleQuickAction = (action) => {
    switch(action) {
      case 'keywords':
        navigate('/keywords');
        break;
      case 'pending':
        navigate('/research-feed');
        break;
      case 'directory':
        navigate('/collections');
        break;
      default:
        break;
    }
  };

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
          <p className="text-gray-500 dark:text-gray-400">Welcome back, Alex</p>
        </div>
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Overview</h3>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-background-dark border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Papers</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
            <div className="bg-background-dark border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Approved Papers</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">45</p>
            </div>
            <div className="bg-background-dark border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Rejected Papers</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <div className="bg-background-dark border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Directories Created</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
            </div>
            <div className="bg-background-dark border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Keywords Added</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">20</p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Trends</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-background-dark border border-white/10 rounded-lg p-6">
              <p className="text-base font-medium text-gray-900 dark:text-white mb-4">Papers Added Per Week</p>
              <div className="h-48">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#11d486" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chart-gradient)"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="236" x2="236" y1="1" y2="149">
                      <stop stopColor="#11d486" stopOpacity="0.3"></stop>
                      <stop offset="1" stopColor="#11d486" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-around mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
              </div>
            </div>
            <div className="bg-background-dark border border-white/10 rounded-lg p-6">
              <p className="text-base font-medium text-gray-900 dark:text-white mb-4">Papers by Category</p>
              <div className="space-y-4">
                <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">Technology</p>
                  <div className="w-full bg-primary/10 dark:bg-primary/20 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">Healthcare</p>
                  <div className="w-full bg-primary/10 dark:bg-primary/20 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">Finance</p>
                  <div className="w-full bg-primary/10 dark:bg-primary/20 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">Education</p>
                  <div className="w-full bg-primary/10 dark:bg-primary/20 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => handleQuickAction('keywords')}
              className="px-5 py-2.5 bg-primary text-black font-bold text-sm rounded hover:bg-primary/90 focus:outline-none"
            >
              Add New Keywords
            </button>
            <button 
              onClick={() => handleQuickAction('pending')}
              className="px-5 py-2.5 bg-transparent border border-white/10 text-white/80 font-bold text-sm rounded hover:bg-white/10 focus:outline-none"
            >
              View Pending Papers
            </button>
            <button 
              onClick={() => handleQuickAction('directory')}
              className="px-5 py-2.5 bg-transparent border border-white/10 text-white/80 font-bold text-sm rounded hover:bg-white/10 focus:outline-none"
            >
              Create Directory
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
