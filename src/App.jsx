import './App.css'
import { useState } from 'react'
import { articles } from './components/data'
import ArticlesList from './components/components-jsx/ArticlesList'
import Form from './components/components-jsx/Form'

const App = () => {

  const [_articles, setArticles] = useState(articles)

  return (
    <>

      <ArticlesList articles={_articles} removeArticles={event => setArticles(event)}/>

      <Form articles={_articles} addArticles={event => setArticles(event)} />

    </>
  )
}

export default App
