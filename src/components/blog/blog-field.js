import React from 'react'
import Article from './article.js'
import TimeFormat from './time-format.js'
import './style.scss'

const BlogField = ({title, articles}) => {

  const generateArticles = () => {
    return articles.map((article, index) =>
      <Article
        key={article.pubDate + '-' + index}
        article={article}
        time={<TimeFormat time={article.pubDate}/>}
      />
    )
  }

  return (
    <div className='blog-field'>
      <h1 className='blog-title'>
        {title}
      </h1>
      <div className='blog-content'>
        {generateArticles()}
      </div>
    </div>
  )
}

export default BlogField
