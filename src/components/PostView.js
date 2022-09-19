import React, { useEffect, useState } from 'react'
import './PostView.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPaperPlaneOutline } from 'react-icons/io5';

function PostView() {
    const [state, setState] = useState([]);
    const navigate = useNavigate()
    function toMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        // 👇️ using visitor's default locale
        return date.toLocaleString([], {
            month: 'short',
        });
    }
    useEffect(() => {
        axios.get('https://localhost:5000/')
            .then(function (response) {
                setState(response.data.reverse());
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <>
            <div className="navBar">
                <img className='logoImg' src="https://www.arcgis.com/sharing/rest/content/listings/414b815740f94a88b5fc8779c2cad2dc/info/largethumbnail/blob.png" alt="logo" />
                <h1 className='logo'>Instaclone</h1>
                <img onClick={() => navigate('/post')} className='camera' src="images/camera.png" alt="camera" />
            </div>
            {state.map(user => {
                let base64String = btoa(
                    String.fromCharCode(...new Uint8Array((user.PostImage.data.data)))
                );
                console.log(base64String);
                return (
                    <>
                        <div className='post'>
                            <div className="name">
                                <div className="nameAndlocation">
                                    <h3>{user.name}</h3>
                                    <h3>{user.location}</h3>
                                </div>
                                <img classname='icon'src="images/more_icon.svg" alt="" />
                            </div>
                            <div className="postImg">
                                <img src={`data:image/png;base64,${base64String}`} alt="PostedImage" />
                            </div>
                            <div className="likeshare">
                                <div>
                                <div className="heart"><AiOutlineHeart/></div>
                                <div className="share"><IoPaperPlaneOutline/></div>
                                    <p>{user.date.split("/")[0] + " " + toMonthName(parseInt(user.date.split("/")[1])) + "," + user.date.split("/")[2]}</p>
                                </div>
                                <p>{user.likes} likes</p>
                            </div>
                            <div className="description">
                                <h3>{user.description}</h3>
                            </div>
                        </div>
                    </>
                )
            })
            }

        </>
    )
}

export default PostView