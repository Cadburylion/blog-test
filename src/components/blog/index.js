import React from 'react'
import withFetching from '../fetch'
import BlogField from './blog-field.js'

const url = 'https://api.rss2json.com/v1/api.json'
const feed = '?rss_url=https://medium.jasonmdesign.com/feed'
// const feed = '?rss_url=https://medium.com/feed/@stanfordmag'
const key = '&api_key=splntegknn4wmc7f6wc1el2ry4eoj55tdyexwjhv'

const Blog = ({ data, isLoading, error }) => {
  let articles = data.items ? data.items : []
  let title = data.feed ? data.feed.title : ''
  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading ...</p>
  }

  return (
    <BlogField title={title} articles={articles} />
  )
}

export default withFetching(url+feed+key)(Blog)
