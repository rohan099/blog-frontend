import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async() => {
        let payload = {
            "email": email,
            "password": password
        }
    
        try {
            const resp = await axios.post('http://localhost:8080/api/auth/signin', payload);
            console.log(resp.data);
    
            localStorage.setItem("jwt", resp.data.accessToken)
            localStorage.setItem("user", JSON.stringify(resp.data))
            alert("logged in successfully");
            navigate('/home')
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    return (
        <div>
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign In</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />

                        <button
                            //type="submit"
                            className=' px-5 py-3 bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white'

                            onClick={() => handleSubmit()}
                        >login</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signin;