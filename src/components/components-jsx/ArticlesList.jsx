import "../components-css/ArticlesList.css"
import { use, useState } from "react";

const ArticlesList = props => {

    const [input, setInput] = useState({})
    const [openModify, setOpenModify] = useState(undefined)
    const [modify, setModify] = useState({change: false})



    const handleInput = (e, articleId) => (
        setInput({...input, [articleId]: {...input[articleId], [e.target.name]: e.target.value}})
    );

    return (

        <ul id="articles-list">

            {props.articles.map(el => {

                const currentArticleData = input[el.id] || { title: "", author: "", body: "" };

                return (

                    <li key={el.id}>

                        <h2 className={openModify === el.id ? `off` : ``}>{modify.change ?
                            currentArticleData.title === `` ? el.title : currentArticleData.title
                            : el.title}
                        </h2>

                        <div>
                            <label className={openModify === el.id ? `` : `off`}>Modifica il titolo</label>
                            <input className={openModify === el.id ? `` : `off`} type="text" name="title" value={input.title} onChange={(e) => handleInput(e, el.id)} />
                        </div>

                        <address className={openModify === el.id ? `off` : ``}>{modify.change ?
                            currentArticleData.author === `` ? el.author : currentArticleData.author
                            : el.author}
                        </address>

                        <div>
                            <label className={openModify === el.id ? `` : `off`}>Modifica l'autore</label>
                            <input className={openModify === el.id ? `` : `off`} type="text" name="author" value={input.author} onChange={(e) => handleInput(e, el.id)} />
                        </div>

                        <p className={openModify === el.id ? `off` : ``}>{modify.change ?
                            currentArticleData.body === `` ? el.body : currentArticleData.body
                            : el.body}
                        </p>

                        <div>
                            <label className={openModify === el.id ? `` : `off`}>Modifica la descrizione</label>
                            <input className={openModify === el.id ? `` : `off`} type="text" name="body" value={input.body} onChange={(e) => handleInput(e, el.id)} />
                        </div>

                        <span id="state">{el.public ? `Publico!` : `Privato!`}</span>

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