import React from 'react'

export default function GifItem({title, url}) {

    return (

        <div className="card">
        
            <img src={url} alt = {title}/>

            <figcaption>{title}</figcaption>

        </div>
  )
}
