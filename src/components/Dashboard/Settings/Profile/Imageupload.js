import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import './Imageupload.css'

function Imageupload() {
    
const [selectedFile, setSelectedFile] = useState('');
    
const handleSubmission = (event) => {
		
		setSelectedFile (URL.createObjectURL(event.target.files[0]));

		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

    
    return (
              
        <div className="upload-box__wrapper">
				 <div> 
                    <img src={selectedFile} />
                </div>

				<div>
					<div className="upload-box-title">
						<h1 className="s15"> Upload a New Profile Image</h1> 
					</div>
					
					<br/>
					
					<div className="upload-box-upload">
						<input className="upload" type="file" name="file" onChange={handleSubmission} />
					</div>
					
					{/* <div className="upload-box-upload-btn">
						<button className="PrimaryBtn" onClick={handleSubmission}>Submit</button>
					</div> */}
				</div>

            </div>

    )
}

export default Imageupload
