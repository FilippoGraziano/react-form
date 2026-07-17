import "../components-css/ArticlesList.css"

const ArticlesList = props => (

    <ul id="articles-list">

        {props.articles.map(el => (

            <li key={el.id}>
                <h2>{el.title}</h2>
                <p>{el.body}</p>
                <span>Autore: {el.author}</span>
                <span>{el.public? `Questo articolo è publico` : `Questo articolo è privato`}</span>
                <button onClick={() => props.removeArticles(props.articles.filter(newEl => newEl.id !== el.id))}>
                    <i className="bi bi-trash3"></i>
                </button>
            </li>

        ))}

    </ul>

);

export default ArticlesList