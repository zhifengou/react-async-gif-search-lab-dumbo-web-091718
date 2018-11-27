import React from 'react'

const GifList = ({ gifs }) => {
  const mappedGifs = gifs.map(gif =>
    (<li key={gif.id}><img src={gif.images.fixed_height_small.url} alt=''/></li>))
  return (
    <ul>
      {mappedGifs}
    </ul>
  )
}
export default GifList