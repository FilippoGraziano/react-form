import { useState } from "react";
import "../components-css/Form.css"

const Form = props => {

    const [input, setInput] = useState({ title: ``, description: `` })

    return (
    
    <form onSubmit={e => (

        e.preventDefault(),

        props.addArticles([...props.articles, { ...props.articles.at(-1), title: input.title, id: (props.articles.at(-1).id + 1), description: input.description }]),

        setInput({ title: ``, description: `` })

    )}>

        <div>
            <label id='new-title'>Scrivi un titolo</label>
            <input type="text" value={input.title} onChange={e => setInput({ ...input, title: e.target.value })} id='new-title' />
        </div>

        <div>

            <label id='new-description'>Aggiungi una descrizione</label>
            <input type="text" value={input.description} onChange={e => setInput({ ...input, description: e.target.value })} />

        </div>

        <button>Aggiungi</button>

    </form>
    
    );

};

export default Form