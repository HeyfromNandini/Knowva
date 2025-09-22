import React from 'react';
import { Link } from 'react-router-dom';

const ResearchFeed = () => {
  return (
    <main className="flex-1 w-full px-4 sm:px-6 lg:px-14 py-8">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white">New Papers</h1>
            <p className="text-gray-400 mt-1">Review and approve new papers before they are added to the library.</p>
          </div>

          {/* Papers Table Container */}
          <div className="bg-gray-900/50 rounded-xl border border-gray-800">
            {/* Search and Filter Bar */}
            <div className="p-4 flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-gray-800">
              <div className="relative w-full sm:w-80">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                <input className="form-input w-full rounded-lg border-gray-700 bg-background-dark focus:ring-primary focus:border-primary pl-10 text-sm" placeholder="Search papers" value=""/>
              </div>
              <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  <span>Title</span>
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  <span>Authors</span>
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  <span>Year</span>
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  <span>Score</span>
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  <span>Category</span>
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
              </div>
            </div>

            {/* Papers Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-400 uppercase bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 font-medium" scope="col">Title</th>
                    <th className="px-6 py-3 font-medium" scope="col">Authors</th>
                    <th className="px-6 py-3 font-medium" scope="col">Year</th>
                    <th className="px-6 py-3 font-medium text-center" scope="col">AI Filtering Score</th>
                    <th className="px-6 py-3 font-medium" scope="col">Category</th>
                    <th className="px-6 py-3 font-medium text-right" scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">The Impact of AI on Healthcare</td>
                    <td className="px-6 py-4 text-gray-300">Dr. Anya Sharma, Dr. Ben Carter</td>
                    <td className="px-6 py-4 text-gray-300">2023</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">95</span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">Healthcare</td>
                    <td className="px-6 py-4 text-right flex gap-2 justify-end">
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-red-500">
                        <span className="material-symbols-outlined text-lg">cancel</span>
                      </button>
                      <Link to="/paper-details" className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">Machine Learning in Finance</td>
                    <td className="px-6 py-4 text-gray-300">Dr. Carlos Lopez, Dr. David Evans</td>
                    <td className="px-6 py-4 text-gray-300">2022</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">88</span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">Finance</td>
                    <td className="px-6 py-4 text-right flex gap-2 justify-end">
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-red-500">
                        <span className="material-symbols-outlined text-lg">cancel</span>
                      </button>
                      <Link to="/paper-details" className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">AI Ethics and Bias</td>
                    <td className="px-6 py-4 text-gray-300">Dr. Elena Ramirez, Dr. Frank Green</td>
                    <td className="px-6 py-4 text-gray-300">2024</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">75</span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">Ethics</td>
                    <td className="px-6 py-4 text-right flex gap-2 justify-end">
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-red-500">
                        <span className="material-symbols-outlined text-lg">cancel</span>
                      </button>
                      <Link to="/paper-details" className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">AI in Education</td>
                    <td className="px-6 py-4 text-gray-300">Dr. Gina Harris, Dr. Ian Jackson</td>
                    <td className="px-6 py-4 text-gray-300">2023</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">92</span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">Education</td>
                    <td className="px-6 py-4 text-right flex gap-2 justify-end">
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-red-500">
                        <span className="material-symbols-outlined text-lg">cancel</span>
                      </button>
                      <Link to="/paper-details" className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">AI and Cybersecurity</td>
                    <td className="px-6 py-4 text-gray-300">Dr. Jack King, Dr. Laura Martin</td>
                    <td className="px-6 py-4 text-gray-300">2022</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">85</span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">Cybersecurity</td>
                    <td className="px-6 py-4 text-right flex gap-2 justify-end">
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-red-500">
                        <span className="material-symbols-outlined text-lg">cancel</span>
                      </button>
                      <Link to="/paper-details" className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-primary">
                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-4 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-gray-800">
              <div className="flex-1 w-full sm:w-auto">
                <select className="form-select w-full sm:w-64 rounded-lg border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-sm">
                  <option>Industry Segment</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Technology</option>
                </select>
              </div>
              <div className="flex gap-3 justify-end">
                <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary/30 text-primary hover:bg-primary/40 transition-colors">Add to Directory</button>
                <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-black hover:bg-primary/90 transition-colors">Approve Selected</button>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default ResearchFeed;
