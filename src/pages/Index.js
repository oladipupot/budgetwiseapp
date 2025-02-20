
import React from 'react';

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#2970FF',
        }}
      >
        <a
          href="#"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Budget Wise
        </a>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/signup" style={{ textDecoration: 'none', color: '#fff' }}>
            Sign Up
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>
            Sign In
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/flat-lay-wallet-near-laptop_23-2148285319.jpg?ga=GA1.1.231503627.1739660044&semt=ais_authors_boost')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          padding: '0 20px',
        }}
      >
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Take Control of Your Finances
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '600px' }}>
        Budget Wise is a financial management app that helps users track expenses, set financial goals, and gain insights into their spending habits for better budgeting and savings
        </p>
        <a
          href="/signup"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '20px',
          }}
        >
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          backgroundColor: '#E8F4F2',
        }}
      >
        <h2 style={{ marginBottom: '40px' }}>Why Budget Wise?</h2>
        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
          Track, manage, and optimize your budget with ease.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{ maxWidth: '300px' }}>
            <h4 style={{ fontSize: '20px' }}>Expense Tracking</h4>
            <p>Keep tabs on your spending habits.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h4 style={{ fontSize: '20px' }}>Financial Goals</h4>
            <p>Set goals and achieve them with personalized budgeting plans.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h4 style={{ fontSize: '20px' }}>Reports & Insights</h4>
            <p>Get detailed insights on your financial activities.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#343a40',
          color: '#fff',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <p>&copy; 2025 Budget Wise. All rights reserved. <a href='https://www.linkedin.com/in/oladipupo-toheeb-838489327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>OTF-code</a></p>
        
      </footer>
    </div>
  );
}

export default LandingPage;
