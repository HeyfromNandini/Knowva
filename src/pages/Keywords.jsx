import React from 'react';

const Keywords = () => {
  return (
    <main className="flex-1 w-full px-4 sm:px-6 lg:px-14 py-8">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Keywords</h1>
            <p className="text-white/70 mt-1">Manage your keywords to track relevant research papers.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl border border-white/10 min-h-24">
              <p className="text-sm font-medium text-white/80">Total Keywords</p>
              <p className="text-3xl font-bold mt-2">150</p>
            </div>
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl border border-white/10 min-h-24">
              <p className="text-sm font-medium text-white/80">Active Keywords</p>
              <p className="text-3xl font-bold mt-2">100</p>
            </div>
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl border border-white/10 min-h-24">
              <p className="text-sm font-medium text-white/80">Inactive Keywords</p>
              <p className="text-3xl font-bold mt-2">50</p>
            </div>
          </div>

          {/* Keyword Management Table */}
          <div className="bg-panel rounded-xl border border-white/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-lg font-bold">Keyword Management</h3>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-bold rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">Bulk Actions</button>
                <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-black hover:opacity-90 transition-opacity">Add Keyword</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-primary/10 dark:bg-primary/20 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-white/80" scope="col">Keyword</th>
                    <th className="px-6 py-3 text-white/80" scope="col">Priority</th>
                    <th className="px-6 py-3 text-white/80" scope="col">Last Search</th>
                    <th className="px-6 py-3 text-white/80" scope="col">Status</th>
                    <th className="px-6 py-3 text-right text-white/80" scope="col">Papers (Last Month)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4 font-medium">Artificial Intelligence</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-primary/30 text-primary bg-primary/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        High
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/70">2024-07-20</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-primary/30 text-primary bg-primary/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">120</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4 font-medium">Machine Learning</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-yellow-400/30 text-yellow-300 bg-yellow-500/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                        Medium
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/70">2024-07-15</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-primary/30 text-primary bg-primary/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">95</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4 font-medium">Deep Learning</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-primary/30 text-primary bg-primary/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        High
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/70">2024-07-10</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-primary/30 text-primary bg-primary/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">80</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4 font-medium">Natural Language Processing</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-red-400/30 text-red-300 bg-red-500/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                        Low
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/70">2024-06-25</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-white/20 text-white/70 bg-white/5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                        Inactive
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">45</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4 font-medium">Computer Vision</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-yellow-400/30 text-yellow-300 bg-yellow-500/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                        Medium
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/70">2024-07-05</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border border-primary/30 text-primary bg-primary/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">70</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Forms Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Add/Edit Keyword Form */}
            <div>
              <h3 className="text-lg font-bold mb-4">Add/Edit Keyword</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90" htmlFor="keyword">Keyword</label>
                  <input 
                    className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-primary focus:border-primary text-white placeholder-white/70" 
                    id="keyword" 
                    placeholder="e.g., Quantum Computing" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90" htmlFor="priority">Priority</label>
                  <select className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-primary focus:border-primary text-white" id="priority">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <button className="bg-primary text-black font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto" type="submit">Save Keyword</button>
              </form>
            </div>

            {/* Bulk Actions Form */}
            <div>
              <h3 className="text-lg font-bold mb-4">Bulk Actions</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90" htmlFor="bulk-action">Action</label>
                  <select className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-primary focus:border-primary text-white" id="bulk-action">
                    <option>Activate selected</option>
                    <option>Deactivate selected</option>
                    <option>Change priority for selected</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90" htmlFor="bulk-priority">Set Priority To</label>
                  <select className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-primary focus:border-primary text-white" id="bulk-priority">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <button className="bg-primary text-black font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto" type="submit">Apply Actions</button>
              </form>
            </div>
          </div>
        </div>
    </main>
  );
};

export default Keywords;
