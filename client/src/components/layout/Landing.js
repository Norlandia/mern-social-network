import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                className="spider-logo-main"
                src={require('../../img/spider-logo-mern-2.png')}
                alt="spiderweb logo"
              />
              <h1 className="display-3 mb-4">SpiderWeb</h1>
              <p className="lead">
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <Link to="/register" className="btn btn-lg btn-info mr-2">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-lg btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
