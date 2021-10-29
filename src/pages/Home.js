import React from 'react';
import {Link} from 'react-router-dom';

import takenotes from '../assets/images/takenotes.png'
import  PryButton  from '../components/PryButton';

const Home = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-md">
            <div className="flex w-full justify-center"><img src={takenotes} width={500} height={300} alt="Welcome to Notty App" className="items-center justify-center"/>
            </div>
            <div className="">
            <h1 className="font-bold text-5xl text-blue-900 text-center">Notty</h1>
            <p className="text-center px-5 text-md mt-3">A simple note taking app to keep the most important things together.</p>
            </div>
            <div className="flex w-full justify-center py-5">
                <Link to="/dashboard">
                    <PryButton buttonLabel="Get Started" onClick="" />
            </Link>
            </div>
            </div>            
        </div>
    )
}

export default Home;