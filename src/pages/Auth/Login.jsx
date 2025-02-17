// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import "./Auth.css"

// const Login = () => {
//     const form=useForm({
//               defaultValue:{
//                   Email:"",
//                   password: "",
              

                 
      
//               },
//           });
      
//           const onSubmit=(data)=>{
//               console.log('create project data', data);
//           };
// return (
//   <div className="space-y-5">
//       <h1 >Register</h1> 
//       <Form {...form}>

// <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}> 
  

// <FormField control={form.control}  
//   name="email"
//   render={({field})=>(<FormItem>
//       <FormControl>
//           <Input  {...field} 
//           type="text"
//           className="border w-full border-gray-700 py-5 px-5"
//           placeholder=" email..."
          
          
//           />
//       </FormControl>
//       <FormMessage/>
//   </FormItem>)}
  
//   />

// <FormField control={form.control}  
//   name="password"
//   render={({field})=>(<FormItem>
//       <FormControl>
//           <Input  {...field} 
//           type="text"
//           className="border w-full border-gray-700 py-5 px-5"
//           placeholder=" password..."
          
          
//           />
//       </FormControl>
//       <FormMessage/>
//   </FormItem>)}
  
//   />
  




//  <Button type='submit' className="w-full mt-5">Register</Button>   





// </form>
// </Form>
    
//   </div>
// )
// }

// export default Login



//  const Login = () => {
//     return (
    //   <div className="auth-container">
    //     <div className="sidebar align-items:center">EFFICIO</div>
    //     <div className="form-container">
    //       <div className="form-box">
    //         <h2>Login</h2>
    //         <Input type="email" placeholder="Email" className="input-field" />
    //         <Input type="password" placeholder="Password" className="input-field" />
    //         <div>
    //           <Input type="checkbox" id="remember" /> <label htmlFor="remember">Remember me</label>
    //         </div>
    //         <Button className="btn">Login</Button>
    //         {/* <p className="link">Don't have an account? <a href="/register">Register</a></p> */}
    //       </div>
    //     </div>
    //   </div>

//     <div class="container">
//     <div class="sidebar">
//         <h1 class="logo">EFFICIO</h1>
//     </div>
//     <div class="form-container">
//         <h2>Login</h2>
//         <form>
           
//             <div class="input-group">
//                 <input type="email" placeholder="Email" required/>
//             </div>
//             <div class="input-group">
//                 <input type="password" placeholder="Password" required/>
//             </div>
//             <button type="submit" class="register-btn">Login</button>
//         </form>
//         <p class="login-text">Already have an account? <a href="#">Signin</a></p>
//     </div>
// </div>
//     );
//   };

//   export default Login;




// import React from 'react';
// import './auth.css';

// const Login = () => {
 
  
//   return (
//     <div className="auth-container">
//       {/* <div className="auth-sidebar">
//         <h1>EFFICIO</h1>
//       </div> */}
//       <div className="auth-form ">
//         <h2>Login</h2>
//         <form>
//           <input type="email" placeholder="Email" className="auth-input" />
//           <input type="password" placeholder="Password" className="auth-input " />
//           <button type="submit" className="auth-button">Login</button>
//         </form>
//         {/* <p className="auth-footer">Don't have an account? <a href="/Signup">Register</a></p> */}
     
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from 'react';
import './auth.css';

const Login = ({ toggleForm }) => {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p className="auth-footer">
        Don't have an account? <button onClick={toggleForm}>Register</button>
      </p>
    </div>
  );
};

export default Login;


