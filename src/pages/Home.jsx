import React from 'react';
import logo from '../assets/logo.png';

function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row align-items-center h-100'>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white bg-primary'>
                    <h1 className='display-4 text-white text-center text-uppercase fs-4 mb-3'>
                        An App To<br/>
                        Make Your Life<br/>
                        <span className='display-1'>Easy</span>
                    </h1>
                </div> 
            </div> 
        </div>
    );
}

export default Home;