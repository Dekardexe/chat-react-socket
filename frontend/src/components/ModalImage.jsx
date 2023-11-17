import React from 'react'
import '../stylesCSS/ModalImage.css'
import '../stylesCSS/MediaQueries.css'

const ModalImage = (props) => {

  return (
    <div className='modalImage' onClick={props.close}>
      <img src={props.img}></img>
    </div>
  )
}

export default ModalImage;

