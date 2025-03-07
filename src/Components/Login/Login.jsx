import { useRef, useState } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);


    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        

        setError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('User Login Successfully');
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
        
    }
   
    const handleForget = () =>{
        const email = emailRef.current.value

        if(!email){
            console.log('send reset email',email)
            return;
        }
        else if(!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
            console.log('please write a valid email')
        }


        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('check your email')
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleForget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p>New to this website? Please <Link className='text-green-700' to='/register'>Register</Link></p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
      {
        error && <p className='text-red-800'>{error}</p>
      }
      {
        success && <p className='text-green-800'>{success}</p>
      }
    </div>
  </div>
</div>
    );
};

Login.propTypes = {
    
};

export default Login;