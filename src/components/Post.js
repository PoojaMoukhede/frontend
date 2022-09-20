import React, { useState } from 'react'
import './Post.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Post() {
    const navigate = useNavigate()
    const [fileName, setFileName] = useState("No File Chosen");
    const [file, setFile] = useState({});
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const postData = (e) => {
        e.preventDefault();
        const DATA = new FormData()
        DATA.append('PostImage', file)
        DATA.append('name', name)
        DATA.append('location', location)
        DATA.append('description', description)
        DATA.append('date', new Date().toLocaleDateString())
        DATA.append('likes', parseInt(Math.random() * 10))

        axios.post('https://localhost:5000')
        .then(function (response) {
            console.log(response);
            alert("sucess");
            navigate("/Postview")
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    return (
        <>
            <div className="navBar">
                <img className='logoImg' src="https://www.arcgis.com/sharing/rest/content/listings/414b815740f94a88b5fc8779c2cad2dc/info/largethumbnail/blob.png" alt="logo" />
                <h1 className='logo'>Instaclone</h1>
                <img className='camera' src="images/camera.png" alt="camera" />
            </div>
            <div className="postForm">
                <form action="">
                    <input onChange={(e) => {
                        setFileName(e.target.value.split("\\").pop())
                        setFile(e.target.files[0])
                    }
                    }
                        type="file" name="PostImage" id="file" class="inputfile" style={{ display: "none" }} />
                    <p style={{ display: 'inline-block' }} >{fileName}</p> &nbsp;&nbsp;
                    <label style={{ display: 'inline-block' }} for="file">Browse</label> <br />
                    <input onChange={(e) => setName(e.target.value)} style={{ display: 'inline-block' }} name="name" type="text" placeholder='Author' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input onChange={(e) => setLocation(e.target.value)} name='location' style={{ display: 'inline-block' }} type="text" placeholder='Location' /> <br /> <br />
                    <input onChange={(e) => setDescription(e.target.value)} name='description' style={{ display: 'inline-block', width: '390px' }} type="text" placeholder='Description' />
                    <br /> <br />
                    <button style={{ marginLeft: '170px', paddingLeft: "10px", paddingRight: "10px" }} type="submit" onClick={postData}>Post</button>



                </form>
            </div>
        </>
    )
}

export default Post