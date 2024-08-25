import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('')
    const [show, setShow] = useState(false);

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        setRegisterError('');
        setRegisterSuccess('');
        if(password.length < 6){
            setRegisterError('Password must be at least 6 character');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your Character Should have one Uppercase Character');
            return;
        }
        else if(!accepted){
            setRegisterError('Please Accept our terms and Conditions');
            return;
        }

        console.log(email,password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setRegisterSuccess('User Created Successfully');
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
        })
    }
    return (
        <div className='text-center'>
            <h2 className="text-3xl font-bold">Register</h2>

            <form onSubmit={handleRegister} className='my-5'>
                <input className='w-1/3 py-3 px-4 rounded' type="email" name="email" id="" placeholder='Enter Your Email' required />
                <br />
                <div className='relative my-3'>
                <input className='w-1/3 py-3 px-4 rounded' type={show ? 'text' : 'password'} name="password" id="" placeholder='Enter Password' required/> 
                <span className='absolute top-1/3 -ml-6' onClick={ () => setShow(!show)}>{
                    show? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }</span>
                </div>
                
                 <input  type="checkbox" name="terms" id="" />
                 <label htmlFor="terms">Accept Our terms and Conditions</label>
                 <br />
              
                <p>Already have an Account? <Link className='text-green-800' to='/login'>Login Here...</Link></p>
                <input className='btn btn-secondary w-1/3 text-xl font-bold text-white' type="submit" name="submit" value='Register' />
            </form>
            {
                registerError && <p className='text-red-900'>{registerError}</p>
            }
            {
                registerSuccess && <p className='text-green-900'>{registerSuccess}</p>
            }
        </div>
    );
};

Register.propTypes = {
    
};

export default Register;