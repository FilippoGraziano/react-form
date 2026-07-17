import { useState } from "react";
import "../components-css/Form.css"

const Form = props => {

    const [formData, setFormData] = useState({ title: ``, body: ``, author: ``, public: false })

    const handleFormData = e => {

        const value = e.target.type === `checkbox` ? e.target.checked : e.target.value;

        return (

            setFormData({ ...formData, [e.target.name]: value }

        ));
    };

    return (

        <form onSubmit={e => (

            e.preventDefault(),

            props.addArticles([...props.articles, { ...props.articles.at(-1), ...formData, id: crypto.randomUUID() }]),

            setFormData({ title: ``, body: ``, author: ``, public: false })

        )}>
            <div id="inputs">

                <div>

                    <label id='new-title'>Scrivi un titolo</label>
                    <input type="text" name="title" placeholder="Aggiungi titolo" value={formData.title} onChange={handleFormData} />

                </div>

                <div>

                    <label id='new-title'>Scrivi un autore</label>
                    <input type="text" name="author" placeholder="Aggiungi titolo" value={formData.author} onChange={handleFormData} />

                </div>

                <div>

                    <label id='new-body'>Aggiungi una descrizione</label>
                    <input type="text" name="body" placeholder="Aggiungi descrizione" value={formData.body} onChange={handleFormData} />

                </div>

                <div>

                    <label id='new-public'>Metti la crcetta se vuoi che sia pubblico</label>
                    <input type="checkbox" name="public" placeholder="Aggiungi descrizione" value={formData.public} onChange={handleFormData} />

                </div>

            </div>

            <button>Aggiungi</button>

        </form>

    );

};

export default Form