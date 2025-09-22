import React from 'react';
import Footer from '../components/Footer.jsx';

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        color: 'var(--text-primary)',
        background: 'var(--background-dark)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 720, textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '48px',
            lineHeight: 1.1,
            margin: 0,
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          Knowva
        </h1>
        <p
          style={{
            marginTop: 12,
            marginBottom: 0,
            color: 'var(--text-secondary)',
            fontSize: '16px',
            lineHeight: 1.6,
          }}
        >
          AI-powered research and knowledge management for smarter insights and
          seamless collaboration.
        </p>

        <form
          onSubmit={handleSubmit}
          role="search"
          style={{
            marginTop: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: 6,
            borderRadius: 12,
            background: 'var(--surface-dark)',
            border: '1px solid var(--border-primary)',
          }}
        >
          <input
            type="text"
            placeholder="Put keywords for desired papers"
            aria-label="Search"
            style={{
              flex: 1,
              padding: '12px 14px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: 16,
            }}
          />
          <button
            type="submit"
            style={{
              background: 'var(--primary)',
              color: 'var(--text-primary)',
              border: 'none',
              borderRadius: 8,
              padding: '10px 16px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </form>
      </div>
      
      {/* What Knowva Does */}
      <section
        aria-labelledby="what-knowva-does"
        style={{
          marginTop: 64,
          width: '100%',
          maxWidth: 1200,
          padding: '0 16px',
        }}
      >
        <h2
          id="what-knowva-does"
          style={{
            textAlign: 'center',
            color: '#ffffff',
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: '-0.01em',
            margin: 0,
            marginBottom: 18,
          }}
        >
          What Knowva Does
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 16,
          }}
        >
          {[
            {
              title: 'Research Engine',
              desc:
                'Harness our AI-powered engine to find precise information and uncover connections across vast datasets.',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="var(--primary)" strokeWidth="2" />
                  <path d="m21 21-4.3-4.3" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              title: 'Smart Insights',
              desc:
                'Automate analysis and generate summaries, key takeaways, and neat reports with our intelligent tools.',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v4" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 17v4" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12h4" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 12h4" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3.5" stroke="var(--primary)" strokeWidth="2" />
                </svg>
              ),
            },
            {
              title: 'Directories & Chat',
              desc:
                'Organize knowledge, enable collaboration, and interact in real-time through integrated chat.',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 5h16v10H8l-4 4V5Z" stroke="var(--primary)" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              title: 'Responsible Impact',
              desc:
                'Keep control with ethical AI, ensuring your data is secure and technology is used for positive change.',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 4v5c0 5-7 9-7 9s-7-4-7-9V7l7-4Z" stroke="var(--primary)" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: 'var(--surface-dark)',
                border: '1px solid var(--border-primary)',
                borderRadius: 12,
                padding: 16,
                color: 'var(--text-primary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  aria-hidden
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: 'var(--primary-10)',
                  }}
                >
                  {item.icon}
                </span>
                <strong style={{ fontSize: 14 }}>{item.title}</strong>
              </div>
              <p
                style={{
                  marginTop: 10,
                  marginBottom: 0,
                  color: 'var(--text-secondary)',
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div style={{ width: '100%', marginTop: 80 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
