import React from 'react';

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
              <a href="register.html" className="btn btn-lg btn-info mr-2">
                Sign Up
              </a>
              <a href="login.html" className="btn btn-lg btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
