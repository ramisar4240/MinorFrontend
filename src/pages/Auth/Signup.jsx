// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const Signup = () => {
//     const form=useForm({
//               defaultValue:{
//                   Email:"",
//                   password: "",
//                   fullName: "",

                 
      
//               },
//           });
      
//           const onSubmit=(data)=>{
//               console.log('create project data', data);
//           };
// return (
//   <div className="space-y-5">
//       <h1>Register</h1> 
//       <Form {...form}>

// <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}> 
//   <FormField control={form.control}  
//   name="fullName"
//   render={({field})=>(<FormItem>
//       <FormControl>
//           <Input  {...field} 
//           type="text"
//           className="border w-full border-gray-700 py-5 px-5"
//           placeholder=" fullName..."
          
          
//           />
//       </FormControl>
//       <FormMessage/>
//   </FormItem>)}
  
//   />

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

// export default Signup






//  const Signup= () => {
   
//     return (
//     //   <div className="auth-container">
//     //     <div className="sidebar">EFFICIO</div>
//     //     <div className="form-container">
//     //       <div className="form-box">
//     //         <h2>Register</h2>
//     //         <Input type="text" placeholder="Full Name" className="input-field" />
//     //         <Input type="email" placeholder="Email" className="input-field" />
//     //         <Input type="password" placeholder="Password" className="input-field" />
//     //         <Button className="btn">Register</Button>
//     //         <p className="link">Already have an account? <a href="/login">Sign in</a></p>
//     //       </div>
//     //     </div>
//     //   </div>
    
 
//     <div class="container">
//         <div class="sidebar">
//             <h1 class="logo">EFFICIO</h1>
//         </div>
//         <div class="form-container">
//             <h2>Register</h2>
//             <form>
//                 <div class="input-group">
//                     <input type="text" placeholder="Full Name" required/>
//                 </div>
//                 <div class="input-group">
//                     <input type="email" placeholder="Email" required/>
//                 </div>
//                 <div class="input-group">
//                     <input type="password" placeholder="Password" required/>
//                 </div>
//                 <button type="submit" class="register-btn">Register</button>
//             </form>
//             <p class="login-text">Already have an account? <a href="#">Signin</a></p>
           
//         </div>
//     </div>


//     );
//   };
//   export default Signup;

// import React from 'react';
// import './auth.css';

// const Signup = () => {
 
//   return (
//     <div className="auth-container">
//       {/* <div className="auth-sidebar">
//         <h1>EFFICIO</h1>
//       </div> */}
//       <div className="auth-form">
//         <h2>Register</h2>
//         <form>
//           <input type="text" placeholder="Full Name" className="auth-input" />
//           <input type="email" placeholder="Email" className="auth-input" />
//           <input type="password" placeholder="Password" className="auth-input" />
//           <button type="submit" className="auth-button">Register</button>
//         </form>
//         {/* <p className="auth-footer">Already have an account? <a href="/Login">Signin</a></p> */}
       
//       </div>
//     </div>
//   );
// };

// export default Signup;





import React from 'react';
import './auth.css';

const Signup = ({ toggleForm }) => {
  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button type="submit" className="auth-button">Register</button>
      </form>
      <p className="auth-footer">
        Already have an account? <button onClick={toggleForm}>Login</button>
      </p>
    </div>
  );
};

export default Signup;

