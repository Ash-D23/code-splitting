import React from 'react'

function Gallery() {
  return (
    <div>
      <h2 className='center'>Image Gallery</h2>
    
      <div className='container'>
          <div className='gallery-container'>
              <img src="gallery-image.jpg" alt="gallery image" />
              <img src="gallery-image.jpg" alt="gallery image" />
              <img src="gallery-image.jpg" alt="gallery image" />
              <img src="gallery-image.jpg" alt="gallery image" />
              <img src="gallery-image.jpg" alt="gallery image" />
              <img src="gallery-image.jpg" alt="gallery image" />
          </div>
      </div>
    </div>
  )
}

export default Gallery