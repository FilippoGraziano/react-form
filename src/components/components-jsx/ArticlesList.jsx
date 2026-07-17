import "../components-css/ArticlesList.css"

const ArticlesList = props => (

    <ul id="articles-list">

        {props.articles.map(el => (

            <li key={el.id}>
                <h2>{el.title}</h2>
                <address>{el.author}</address>
                <p>{el.body}</p>
                <span id="state">{el.public? `Publico!` : `Privato!`}</span>
                <button onClick={() => props.removeArticles(props.articles.filter(newEl => newEl.id !== el.id))}>
                    <i className="bi bi-trash3"></i>
                </button>
            </li>

        ))}

    </ul>

);

export default ArticlesList