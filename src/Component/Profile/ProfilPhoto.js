import React from 'react'
import image from './image.jpg'

function ProfilPhoto() {
    return (
        <div >
            <img className ="photo" width={700} height={700}src={image} alt="imageInSrc" /> 
        </div>
    )
}

export default ProfilPhoto
