// API Configuration for Knowva Application
// Centralized endpoint management

const API_BASE_URL = 'https://nandinisingh18.app.n8n.cloud/webhook';

// API Endpoints
export const API_ENDPOINTS = {
  // Chat API
  CHAT: `${API_BASE_URL}/chat`,
  
  // Keywords API
  KEYWORDS: `${API_BASE_URL}/keywords`,
  
  // Future endpoints can be added here
  // PAPERS: `${API_BASE_URL}/papers`,
  // COLLECTIONS: `${API_BASE_URL}/collections`,
  // USERS: `${API_BASE_URL}/users`,
};

// API Service Functions
export const apiService = {
  // Chat API
  async sendChatMessage(query, topK = 5) {
    try {
      const response = await fetch(API_ENDPOINTS.CHAT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          top_k: topK
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Chat API error:', error);
      throw error;
    }
  },

  // Keywords API
  async getKeywords() {
    try {
      const response = await fetch(API_ENDPOINTS.KEYWORDS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get keywords API error:', error);
      throw error;
    }
  },

  async addKeyword(keyword, priority = 'Medium', status = 'Active') {
    try {
      const response = await fetch(API_ENDPOINTS.KEYWORDS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword,
          priority,
          status
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Add keyword API error:', error);
      throw error;
    }
  }
};

// Constants for form validation
export const KEYWORD_CONSTANTS = {
  PRIORITIES: ['High', 'Medium', 'Low'],
  STATUSES: ['Active', 'Disabled'],
  MAX_KEYWORD_LENGTH: 100,
  MIN_KEYWORD_LENGTH: 2
};

export default apiService;
