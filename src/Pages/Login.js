import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from '../Pages/userData';
import './Login.css'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = UserData.find(
      (u) => (u.username === username && u.password === password ) || (u.email === username && u.password === password )
    );

    if (user) {
      setSuccess(true);
      setError('');
      //to hold state till loging out
      localStorage.setItem('username', username);
      // Navigate to the WelcomePage with the username
      window.location.reload(navigate('/')) ;
      // Handle successful login
    } else {
      setSuccess(false);
      setError('Invalid username or password');
    }
  };

  return (
    <div className='LoginMainBox'>
      <h2 className="LoginBox1">Sign In</h2>
      <div className="box2">
        <form onSubmit={handleSubmit}>
            <label className='LogFlexy'>Username:</label>
            <input
              className='LoginInput'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='LogFlexy'>Password:</label>
            <input
              className='LoginInput'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </form>
        <h3 className="last-in-box">
          By clicking Continue or Sign up, you agree to Farmhouse terms of use and Privacy Policy
        </h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Login successful!</p>}
        <div className="btns">
          <button type="submit" className="LoginSubmitBtn" id="btn-next">
            Submit
          </button>
        

        </div>
      </div>
    </div>
  );
};

// import { useState } from 'react';
// import '../CSS/Login.css';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Supabase } from '../loginSupabase';

// const LoginForm = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       console.error("Email and Password are required.");
//       return;
//     }

//     try {
//       const { data: signInData, error } = await Supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

      

//       if (error) {
//         console.error("Error signing in:", error.message);
//       } else {
//         console.log("User signed in:", signInData.user.id);

//         // Fetch additional user data (if any exists in another table)
//         const { data: userDetails, error: userDetailsError } = await Supabase
//           .from('users') // Your table name here
//           .select('*') // Or select specific columns like .select('role, preferences')
//           .eq('id', signInData.user.id); // Querying based on user ID

//         if (userDetailsError) {
//           console.error("Error fetching user details:", userDetailsError.message);
//         } else {
//           console.log("Fetched user details:", userDetails);

//           // You can now store user details in your app state or context if needed

//           // Redirect the user to the home page after login
//           navigate("/home");
//         }
//       }
//     } catch (error) {
//       console.error("Error signing in:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2 className="LoginBox1">
//         Login
//       </h2>
//       <div className="box2">
//         <div className="container-questions">
//           <form onSubmit={handleSubmit}>
//             <div className='LogFlexy'>
//               <label className="question">Email:</label>
//               <input
//                 className='LoginInput'
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className='LogFlexy'>
//               <label className="question">Password:</label>
//               <input
//                 className='LoginInput'
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <h3 className="last-in-box">
//               By clicking Continue or Sign up, you agree to StudySphere's terms of use including Subscriptions Term and Privacy Policy
//             </h3>
//             <div className="btns">
//               <button type="submit" className="LoginSubmitBtn" id="btn-next">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Login;
