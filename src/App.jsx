import './App.css'
import ArticlesList from './components/components-jsx/ArticlesList'
import Form from './components/components-jsx/Form'
import { useState } from 'react'
import { articles } from './components/data'

const App = () => {

  const [_articles, setArticles] = useState(articles)

  return (
    <main className='container'>

      <ArticlesList articles={_articles} removeArticles={event => setArticles(event)}/>

      <Form articles={_articles} addArticles={event => setArticles(event)} />

    </main>
  )
}

export default App
