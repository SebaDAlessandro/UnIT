/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
/* import {Container, FormGroup, Input} from 'reactstrap'; */
// import style from './UploadImage.module.css';

//Cloudinary

const UploadImage = (props) => {
    const [image, setImage] = useState("")
    const[loading, setLoading] = useState(false);

    const uploadImage = async (e) =>{
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', "images" );
        setLoading(true);
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dxqxsbe5n/image/upload',
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        console.log(res)
        setImage(file.secure_url)
        // console.log(file.secure_url)
        setLoading(false)
    }

    return (
    <div>
        <div style={{textAlign: "center"}}>
            <div>
                <input
                    type="file"
                    name="file"
                    placeholder="Sube tu imágen aquí"
                    onChange={uploadImage}
                />
                {loading ? (<h3>Cargando imágen...</h3>): (<img src={image} style={{width:"300px"}}/>)}
            </div>
        </div>
    </div>
    )
}

export default UploadImage