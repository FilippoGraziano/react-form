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

                    <label>Scrivi un titolo</label>
                    <input type="text" name="title" placeholder="Aggiungi titolo" value={formData.title} onChange={handleFormData} />

                </div>

                <div>

                    <label>Scrivi un autore</label>
                    <input type="text" name="author" placeholder="Aggiungi titolo" value={formData.author} onChange={handleFormData} />

                </div>

                <div>

                    <label>Scrivi una descrizione</label>
                    <input type="text" name="body" placeholder="Aggiungi descrizione" value={formData.body} onChange={handleFormData} />

                </div>

                <div className="input-checkbox">

                    <label className="custom-checkbox">
                        <input type="checkbox" name="public" placeholder="Aggiungi descrizione" value={formData.public} onChange={handleFormData} />
                        <span className="label">Vuoi l'articolo pubblico?</span>
                        <span className="box"></span>
                    </label>

                </div>

            </div>

            <button>Aggiungi</button>

        </form>

    );

};

export default Form