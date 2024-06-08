import './login.css'

export default function Login() {
  return (
  <div className='login'>
    <form  className="loginForm">
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter your email..' name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter your password..' name="" id="" />
        <button className="loginButton">Login </button>
    </form>
    <button className="loginRegisterButton">Register</button>
    </div>
);
}
