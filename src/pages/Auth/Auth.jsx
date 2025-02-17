// import { useState } from "react";
// import "./Auth.css";
// import Signup from "./Signup";
// import Login from "./Login";
// import { Button } from "@/components/ui/button";

// const Auth = () => {
//     const [active,setActive] = useState(true);

// return (
// <div className='loginContainer'>
//     <div className='box h-[30rem] w-[25rem]'>
//         <div className='minContainer login'>
//             <div className='loginBox w-full px-10 space-y-5'>
//                 {active?<Signup/>:<Login/>}
//                 <div>
//                     <span>already have an account</span>
//                     <Button variant="ghost" onClick={()=>setActive(!active)}>
//                         {active? "signin": "signup"}
//                     </Button>
//                 </div>

//             </div>

//         </div>
//     </div>
  
// </div>
// )
// }

// export default Auth












// import React, { useState } from 'react';
// import Signup from './Signup';
// import Login from './login';
// import './auth.css';

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

//   const toggleForm = () => {
//     setIsLogin((prev) => !prev); // Toggle the state
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-sidebar">
//         <h1>EFFICIO</h1>
//       </div>
//       <div className="auth-form">
//         {isLogin ? <Login /> : <Signup />} {/* Render Login or Signup based on the state */}
//         <p className="auth-footer">
//           {isLogin ? (
//             <>Don't have an account? <button onClick={toggleForm}>Register</button></>
//           ) : (
//             <>Already have an account? <button onClick={toggleForm}>Login</button></>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Auth;




import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import './auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <div className="auth-container">
      <div className="auth-sidebar">
        <h1>EFFICIO</h1>
      </div>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
};

export default Auth;

