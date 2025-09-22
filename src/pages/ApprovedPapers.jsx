import React, { useState } from 'react';

const ApprovedPapers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    date: '',
    category: '',
    intervention: '',
    outcome: '',
    industrySegment: ''
  });

  const papers = [
    {
      id: 1,
      title: 'The Impact of AI on Customer Service Efficiency',
      category: 'Technology',
      intervention: 'AI Implementation',
      outcome: 'Improved Response Time',
      industrySegment: 'Customer Service',
      date: '2023-01-15'
    },
    {
      id: 2,
      title: 'Enhancing Employee Productivity with Remote Work Tools',
      category: 'Human Resources',
      intervention: 'Remote Work Tools',
      outcome: 'Increased Productivity',
      industrySegment: 'Technology',
      date: '2023-02-20'
    },
    {
      id: 3,
      title: 'The Role of Data Analytics in Marketing Optimization',
      category: 'Marketing',
      intervention: 'Data Analytics',
      outcome: 'Optimized Campaigns',
      industrySegment: 'Marketing',
      date: '2023-03-25'
    },
    {
      id: 4,
      title: 'Sustainable Practices in Manufacturing: A Case Study',
      category: 'Manufacturing',
      intervention: 'Sustainable Practices',
      outcome: 'Reduced Waste',
      industrySegment: 'Manufacturing',
      date: '2023-04-30'
    },
    {
      id: 5,
      title: 'The Future of Healthcare: Telemedicine and Patient Outcomes',
      category: 'Healthcare',
      intervention: 'Telemedicine',
      outcome: 'Improved Patient Outcomes',
      industrySegment: 'Healthcare',
      date: '2023-05-05'
    },
    {
      id: 6,
      title: 'Cybersecurity Threats and Mitigation Strategies for Small Businesses',
      category: 'Cybersecurity',
      intervention: 'Cybersecurity Measures',
      outcome: 'Reduced Security Breaches',
      industrySegment: 'Small Business',
      date: '2023-06-10'
    },
    {
      id: 7,
      title: 'The Impact of Social Media Marketing on Brand Awareness',
      category: 'Marketing',
      intervention: 'Social Media Marketing',
      outcome: 'Increased Brand Awareness',
      industrySegment: 'Marketing',
      date: '2023-07-15'
    },
    {
      id: 8,
      title: 'Innovations in Financial Technology: Blockchain and Cryptocurrency',
      category: 'Finance',
      intervention: 'Blockchain Technology',
      outcome: 'Enhanced Security',
      industrySegment: 'Finance',
      date: '2023-08-20'
    }
  ];

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.intervention.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.outcome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.industrySegment.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <main className="flex-grow w-full px-4 sm:px-6 lg:px-14 py-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Library</h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-green/20 text-emerald-green font-medium hover:bg-emerald-green/30 transition-colors">
                <span className="material-symbols-outlined text-base">download</span>
                <span className="truncate text-sm">Export</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-green text-charcoal font-medium hover:bg-emerald-green/90 transition-colors">
                <span className="material-symbols-outlined text-base">add</span>
                <span className="truncate text-sm">Add to Directory</span>
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">search</span>
              <input
                className="form-input w-full rounded-lg border-slate-300 dark:border-light-dark bg-white dark:bg-light-dark py-3 pl-12 pr-4 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-emerald-green focus:border-emerald-green"
                placeholder="Search approved papers..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-light-dark text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-light-dark/70 text-sm font-medium transition-colors">
              <span>Date</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-light-dark text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-light-dark/70 text-sm font-medium transition-colors">
              <span>Category</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-light-dark text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-light-dark/70 text-sm font-medium transition-colors">
              <span>Intervention</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-light-dark text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-light-dark/70 text-sm font-medium transition-colors">
              <span>Outcome</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-light-dark text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-light-dark/70 text-sm font-medium transition-colors">
              <span>Industry Segment</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
          </div>
          <div className="overflow-x-auto bg-white dark:bg-light-dark rounded-lg border border-slate-200/50 dark:border-slate-700/50">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-100 dark:bg-charcoal/50">
                <tr>
                  <th className="px-6 py-3 min-w-[250px]" scope="col">Title</th>
                  <th className="px-6 py-3 min-w-[150px]" scope="col">Category</th>
                  <th className="px-6 py-3 min-w-[150px]" scope="col">Intervention</th>
                  <th className="px-6 py-3 min-w-[150px]" scope="col">Outcome</th>
                  <th className="px-6 py-3 min-w-[150px]" scope="col">Industry Segment</th>
                  <th className="px-6 py-3 min-w-[120px]" scope="col">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
                {filteredPapers.map((paper) => (
                  <tr key={paper.id} className="hover:bg-slate-100/50 dark:hover:bg-charcoal/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{paper.title}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{paper.category}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{paper.intervention}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{paper.outcome}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{paper.industrySegment}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{paper.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-light-dark p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Top Industry Segments</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Researched this month</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Animal Welfare</span>
                <span className="text-sm font-semibold text-neon-green">34%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-charcoal rounded-full h-2">
                <div className="bg-neon-green h-2 rounded-full" style={{width: '34%'}}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Aquaculture</span>
                <span className="text-sm font-semibold text-neon-green">25%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-charcoal rounded-full h-2">
                <div className="bg-neon-green h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Plant-based Foods</span>
                <span className="text-sm font-semibold text-neon-green">18%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-charcoal rounded-full h-2">
                <div className="bg-neon-green h-2 rounded-full" style={{width: '18%'}}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Alternative Proteins</span>
                <span className="text-sm font-semibold text-neon-green">15%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-charcoal rounded-full h-2">
                <div className="bg-neon-green h-2 rounded-full" style={{width: '15%'}}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Other</span>
                <span className="text-sm font-semibold text-neon-green">8%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-charcoal rounded-full h-2">
                <div className="bg-neon-green h-2 rounded-full" style={{width: '8%'}}></div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-light-dark p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Directories</h3>
            <ul className="space-y-3">
              <li>
                <a className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-green dark:hover:text-emerald-green transition-colors" href="#">
                  <span className="material-symbols-outlined text-emerald-green">folder</span>
                  <span>Fish Welfare Folder</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-green dark:hover:text-emerald-green transition-colors" href="#">
                  <span className="material-symbols-outlined text-emerald-green">folder</span>
                  <span>Broiler Chicken Welfare</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-green dark:hover:text-emerald-green transition-colors" href="#">
                  <span className="material-symbols-outlined text-emerald-green">folder</span>
                  <span>Cage-Free Eggs Analysis</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-green dark:hover:text-emerald-green transition-colors" href="#">
                  <span className="material-symbols-outlined text-emerald-green">folder</span>
                  <span>Policy Impact Reports</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default ApprovedPapers;
