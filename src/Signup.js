import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async() => {
        let payload = {
            "username": name,
            "email": email,
            "password": password
        }
    
        try {
            const resp = await axios.post('http://localhost:8080/api/auth/signup', payload);
            console.log(resp.data);
            alert(resp.data.message);
            navigate('/login');
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />

                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />

                        <button
                            //type="submit"
                            className=' px-5 py-3 bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white'

                            onClick={()=>handleSubmit()}
                        >Create Account</button>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link to='/login'>
                            login
                            </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;