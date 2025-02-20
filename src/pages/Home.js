import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#f8f9fa' }}>
        <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: 'bold' }}>Budget Wise</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="hero-section"
        style={{
          background: "url('https://source.unsplash.com/1600x900/?finance') no-repeat center center/cover",
          height: '100vh',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Take Control of Your Finances</h1>
          <p style={{ fontSize: '20px' }}>Join Budget Wise to manage your expenses effectively and save more.</p>
          <a href="#" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features py-5" style={{ padding: '60px 0' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '40px' }}>Why Budget Wise?</h2>
          <p className="lead">Track, manage, and optimize your budget with ease.</p>
          <div className="row mt-4">
            <div className="col-md-4">
              <h4 style={{ fontSize: '20px' }}>Expense Tracking</h4>
              <p>Keep tabs on your spending habits.</p>
            </div>
            <div className="col-md-4">
              <h4 style={{ fontSize: '20px' }}>Financial Goals</h4>
              <p>Set goals and achieve them with personalized budgeting plans.</p>
            </div>
            <div className="col-md-4">
              <h4 style={{ fontSize: '20px' }}>Reports & Insights</h4>
              <p>Get detailed insights on your financial activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-light text-center" style={{
        backgroundColor: '#343a40',
        color: '#fff',
        padding: '20px 0'
      }}>
        <div className="container">
          <p>&copy; 2025 Budget Wise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default Home