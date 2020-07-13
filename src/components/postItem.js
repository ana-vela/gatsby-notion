import React from 'react'
import { Link } from 'gatsby'

export default ({ data }) => {
  const {
    title,
    tags,
    cover_image,
    publish_date,
    desc,
    read_time,
    url,
    slug,
  } = data

  return (
    <div style={{ margin: 5 }}>
      <Link to={`posts/${url}/`}>
        <div style={{ color: 'gray' }}>
          Tags: {tags && tags.join(', ')} • Published: {publish_date}
        </div>
        <div>
        <h2 style={{color: '#82699a', fontSize: '22px', marginBottom: '-5px'}}>{title}</h2>
        <p
          style={{ color: '#555555'}}
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
        </div>
      </Link>
      <br />
    </div>
  )
}
