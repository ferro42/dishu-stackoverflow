import React from 'react'
import './Tags.css'
const tagslist = ({tag}) => {
  return (
    <div className='tag'>
      <h5>{tag.tagname}</h5>
      <p>{tag.tagdesc}</p>
    </div>
  )
}

export default tagslist
