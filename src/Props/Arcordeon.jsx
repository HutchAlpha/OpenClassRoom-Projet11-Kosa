import React from 'react';

function Arcordeon({ donnees, className = '' }) {
    const [indexOuverts, setIndexOuverts] = React.useState([]);

    const toggle = (index) => {
        setIndexOuverts((prev) => {
        // Si ouvert → on le ferme
        if (prev.includes(index)) {
            return prev.filter(i => i !== index);
        }
        // Sinon → on l'ouvre 
        return [...prev, index];
        });
    };

    return (
        <div className={`accordeon ${className}`}>
        {donnees.map((item, index) => {
            const ouvert = indexOuverts.includes(index);

            return (
            <div key={index} className={`accordeon-item ${ouvert ? 'est-ouvert' : ''}`}>
                <button className="accordeon-entete" onClick={() => toggle(index)}>
                <span>{item.titre}</span>
                <span className="accordeon-icone">⌃</span>
                </button>

                <div className="accordeon-contenu">
                {item.contenu ? item.contenu : <p>{item.texte}</p>}
                </div>
            </div>
            );
        })}
        </div>
    );
}

export default Arcordeon;