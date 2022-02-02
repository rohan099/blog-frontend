import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState([]);
    const user = localStorage.getItem("jwt")
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        axios.get('http://localhost:8080/api/blogs')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })

    }, [user])
    return (
        <div>
            <button
                //type="submit"
                className='m-5 px-5 py-3 bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white'
                onClick={(e) => { e.preventDefault(); localStorage.clear(); navigate('/login') }}
            >logout</button>
            {data.map((item) => (
                <div key={item.id} aria-label="group of cards" tabindex="0" className="focus:outline-none py-8 w-full">
                    <div className="lg:flex items-center justify-center w-full">
                        <div tabindex="0" aria-label="card 1" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                            <div className="flex items-center border-b border-gray-200 pb-6">
                                <div className="flex items-start justify-between w-full">
                                    <div className="pl-3 w-full">
                                        <p tabindex="0" className="focus:outline-none text-xl font-medium leading-5 text-gray-800">{item.title}</p>
                                    </div>
                                    <div role="img" aria-label="bookmark">
                                        <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <p tabindex="0" className="focus:outline-none text-sm leading-5 py-4 text-gray-600">{item.body}</p>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;