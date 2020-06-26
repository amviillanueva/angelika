import React from 'react';
import { Div } from './style';

function Home() {
    return(<Div className="container d-flex align-items-center justify-content-center flex-md-row flex-column">
        <div className="p-5">
            <h2>Home Page</h2>
            <p>div 1</p>
        </div>
        <div className="p-5">
            <h2>Home Page</h2>
            <p>div 2</p>
        </div>
    </Div>)
}

export default Home;