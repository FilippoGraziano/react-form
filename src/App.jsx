import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { articles } from './components/data'

const App = () => {

  const [input, setInput] = useState({title: ``, description: ``})
  const [_articles, setArticles] = useState(articles)

  return (
    <>

      <ul>

        {_articles.map(el => (

          <li key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <button onClick={() => setArticles(_articles.filter(newEl => newEl.id !== el.id))}>
              <i className="bi bi-trash3"></i>
            </button>
          </li>

        ))}

      </ul>

      <form onSubmit={e => (

        e.preventDefault(),

        setArticles([...articles, {..._articles.at(-1), title: input.title, id: (_articles.at(-1).id + 1), description: input.description}]),

        setInput({title: ``, description: ``})

      )}>

        <div>
          <label id='new-title'>Scrivi un titolo</label>
          <input type="text" value={input.title} onChange={e => setInput({...input, title: e.target.value})} id='new-title' />
        </div>

        <div>

          <label id='new-description'>Aggiungi una descrizione</label>
          <input type="text" value={input.description} onChange={e => setInput({...input, description: e.target.value})} />

        </div>

        <button>Aggiungi</button>

      </form>

    </>
  )
}

export default App
