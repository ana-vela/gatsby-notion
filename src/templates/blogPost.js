import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { parseImageUrl } from 'notabase/src/utils'


export default ({ data }) => {
  const { posts: { title, tags, publish_date, html, url, slug, desc, color, cover_image } } = data

  return (
    <Layout>
      <div id = "main">
        <div>{tags && tags.join(', ')}</div>
        <h1 style={{ fontSize: '30px', color: '#4d6d9a', fontWeight:'bold', marginBottom: '10px'}}>{title}</h1>
        <div>{publish_date}</div>
        <div style={{ color: '#555555'}} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date(formatString: "MMMM Do, YYYY")
      url
      desc
      color
      cover_image
    }
  }
`
