import React from 'react'
import './style.scss'

const Article = ({article, time}) => {
  article ? console.log('pubDate: ', article.pubDate) : ''
  return (
    <a href={article.link} target='_#' className='blog-wrapper'>
      <div className='blog-image'>
        {time}
        <img src={article.thumbnail} alt='blog article thumbnail' />
      </div>
      <div className='article-title'>{article.title}</div>
    </a>
  )
}

export default Article
