import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container" >
                <div className="image">
                    <img src="images/view.png" alt="cameraImg" style={{ height: "90vh" }} />
                </div>
                <div className="entryBox">
                    <h1 className='enterText'>10x Team 04</h1>
                    <button onClick={() => navigate('/postview')} className='enter'>Enter</button>
                </div>
            </div>
        </>
    )
}

export default LandingPage