import React, { useState } from 'react';
import './SignIn.css'; // Optional CSS for styling

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can integrate with authentication API here
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 style={{marginLeft:'250px'}}>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="email">Email address</label> */}
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Email'
                required
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='Password'
                required
              />
            </div >
            <button type="submit" className="btn btn-primary" 
            style={{marginLeft:'150px', width:'300px',height:'50px', marginTop:'40px'}}>
                Sign In</button>
          </form>
          <h5>Forgot Pasword</h5>
        </div>
        <div className="container"> 
        <div className="line"></div>
        <span className="text">Or</span>
        <div className="line"></div>
        
    </div>  
    <div> 
        <h2> if</h2>
    </div>      
    </div>
    </div>
    
  );
};

export default SignIn;