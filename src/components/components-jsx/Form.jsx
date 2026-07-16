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
            <div id="inputs">

                <div>

                    <label id='new-title'>Scrivi un titolo</label>
                    <input type="text" placeholder="Aggiungi titolo" value={input.title} onChange={e => setInput({ ...input, title: e.target.value })} />

                </div>

                <div>

                    <label id='new-description'>Aggiungi una descrizione</label>
                    <input type="text" placeholder="Aggiungi descrizione" value={input.description} onChange={e => setInput({ ...input, description: e.target.value })} />

                </div>

            </div>

            <button>Aggiungi</button>

        </form>

    );

};

export default Form