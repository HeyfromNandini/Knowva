import React, { useState } from 'react';

const PaperDetails = () => {
  const [activeTab, setActiveTab] = useState('abstract');

  const tabs = [
    { id: 'abstract', label: 'Abstract' },
    { id: 'ai-summary', label: 'AI Summary' },
    { id: 'ai-categorization', label: 'AI Categorization' },
    { id: 'ai-filtering', label: 'AI Filtering Justification' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'abstract':
        return (
          <p className="text-white/80 leading-relaxed">
            This paper explores the latest advancements in AI-driven research analysis, focusing on novel methodologies and their applications across various domains. It presents a comprehensive review of current techniques, highlighting their strengths and limitations, and proposes a new framework for enhancing research efficiency and accuracy. The study also discusses the ethical implications of AI in research and suggests guidelines for responsible implementation.
          </p>
        );
      case 'ai-summary':
        return (
          <p className="text-white/80 leading-relaxed">
            AI Summary: This research presents a comprehensive analysis of AI-driven methodologies in research, demonstrating significant improvements in efficiency and accuracy. The proposed framework shows promising results across multiple domains with particular strength in healthcare and finance applications.
          </p>
        );
      case 'ai-categorization':
        return (
          <div className="text-white/80 leading-relaxed">
            <p className="mb-4">AI Categorization Results:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Primary Category: Artificial Intelligence</li>
              <li>Secondary Category: Research Methodology</li>
              <li>Keywords: AI, Research Analysis, Machine Learning, Data Science</li>
              <li>Confidence Score: 94%</li>
            </ul>
          </div>
        );
      case 'ai-filtering':
        return (
          <div className="text-white/80 leading-relaxed">
            <p className="mb-4">AI Filtering Justification:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Relevance Score: 95/100</li>
              <li>Quality Score: 88/100</li>
              <li>Novelty Score: 92/100</li>
              <li>Overall Recommendation: Approve</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-grow container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-white/90 mb-2">Paper Title: Advancements in AI-Driven Research Analysis</h2>
            <p className="text-sm text-white/60">
              Authors: Dr. Emily Carter, Dr. Robert Davis | Year: 2023 | Source: 
              <a className="text-primary hover:underline" href="#"> Journal of AI Research</a>
            </p>
          </div>

          <div className="mb-8">
            <div className="border-b border-white/10">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-white/50 hover:text-white/75 hover:border-white/30'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="pt-6">
              {renderTabContent()}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white/90 mb-4">Actions</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/20 transition-colors">
                  Add/Edit Industry Segment
                </button>
                <button className="flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/20 transition-colors">
                  Add to Directory
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-base">chat_bubble</span>
                  <span>Chat with Paper</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4">
                <button className="flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background-dark hover:bg-primary/90 transition-colors">
                  Approve Paper
                </button>
                <button className="flex items-center justify-center rounded-lg bg-red-500/20 px-5 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500/30 transition-colors">
                  Reject Paper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaperDetails;
