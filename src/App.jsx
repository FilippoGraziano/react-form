import './App.css'
import ArticlesList from './components/components-jsx/ArticlesList'
import Form from './components/components-jsx/Form'
import { useState } from 'react'
import { articles } from './components/data'

const App = () => {

  const [_articles, setArticles] = useState(articles)

  return (
    <main className='container'>

      <ArticlesList articles={_articles} setArticles={setArticles}/>

      <Form articles={_articles} addArticles={setArticles} />

    </main>
  )
}

export default App
