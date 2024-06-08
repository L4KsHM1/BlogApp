import './login.css'

export default function Login() {
  return (
  <div className='login'>
    <span className="loginTitle">Login</span>
    <form  className="loginForm">
        <label htmlFor="">Email</label>
        <input type="email" className='loginInput' placeholder='Enter your email..' name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" className='loginInput' placeholder='Enter your password..' name="" id="" />
        <button className="loginButton">Login </button>
    </form>
    <button className="loginRegisterButton">Register</button>
    </div>
);
}
