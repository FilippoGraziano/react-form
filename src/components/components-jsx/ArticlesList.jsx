import "../components-css/ArticlesList.css"
import { use, useState } from "react";

const ArticlesList = props => {

    const [input, setInput] = useState({})
    const [openModify, setOpenModify] = useState(undefined)

    const handleInput = (e, articleId) => (
        setInput({...input, [articleId]: {...input[articleId], [e.target.name]: e.target.value}})
    );

    return (

        <ul id="articles-list">

            {props.articles.map(el => {

                const isModify = openModify === el.id
                const currentArticleData = input[el.id] || { title: "", author: "", body: "" };

                return (

                    <li key={el.id}>

                        {/*r Title */}
                        <h2 hidden={isModify}>{currentArticleData.title === `` ? el.title : currentArticleData.title}</h2>

                        <div hidden={!isModify}>
                            <label>Modifica il titolo</label>
                            <input type="text" name="title" value={input.title} onChange={(e) => handleInput(e, el.id)} />
                        </div>

                        {/*r Author */}
                        <address className={openModify === el.id ? `off` : ``}>{currentArticleData.author === `` ? el.author : currentArticleData.author}</address>

                        <div hidden={!isModify}>
                            <label>Modifica l'autore</label>
                            <input type="text" name="author" value={input.author} onChange={(e) => handleInput(e, el.id)} />
                        </div>

                        {/*r Description */}
                        <p hidden={isModify}>{currentArticleData.body === `` ? el.body : currentArticleData.body}</p>

                        <div hidden={!isModify}>
                            <label>Modifica la descrizione</label>
                            <input type="text" name="body" value={input.body} onChange={(e) => handleInput(e, el.id)} />
                        </div>

                        {/*r Article state */}
                        <span id="state">{el.public ? `Publico!` : `Privato!`}</span>

                        {/*r Modify button and delete button */}
                        <div>

                            <div>

                                <button onClick={() => props.setArticles(props.articles.filter(newEl => newEl.id !== el.id))}>
                                    <i className="bi bi-trash3"></i>
                                </button>

                                <button onClick={() => (setOpenModify((openModify === undefined ? el.id : undefined)),
                                    setModify({ ...modify, change: true })
                                )}>

                                    <i className="bi bi-pencil"></i>
                                </button>

                            </div>

                        </div>

                    </li>

                );
            })}

        </ul>

    );
};

export default ArticlesList