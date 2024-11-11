import { useState } from 'react';
import '../Pages-Staff-CSS/Login.css'
import React from 'react';
// import { Supabase } from './loginSupabase';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
          <div className='OgBox'>
            <h2 class="LoginBox1">
              Register
            </h2>
            <div class="box2">
              <div class="container-questions">
                <form>
                  <div className='LogFlexy'>
                    <label className="question">Email:</label>
                    <input
                      className='LoginInput'
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='LogFlexy'>
                    <label className="question">Password:</label>
                    <input
                      className='LoginInput'
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                    
                  {/* <Link to="/registration">
                    Sign up as a Tutor
                  </Link> */}
                  <h3 class="last-in-box">
                    By clicking Submit, you agree to terms of use including Subscriptions Term and  Privacy Policy
                  </h3>
                  <div class="Lbtns">
                  {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                  {/* {success && } */}
                  {/* <p style={{ color: 'green' }}>Login successful!</p> */}
                    <button type="submit" class="LoginSubmitBtn" id="btn-next">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    };

export default Register;