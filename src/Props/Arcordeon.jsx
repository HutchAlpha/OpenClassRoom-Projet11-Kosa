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
                <svg className="accordeon-icone" width="32" height="32" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2897 0.789662C11.9591 0.120242 13.0462 0.120242 13.7157 0.789662L24.4979 11.5719C25.1674 12.2414 25.1674 13.3285 24.4979 13.9979C23.8285 14.6674 22.7414 14.6674 22.072 13.9979L12.5 4.42595L2.92804 13.9926C2.25862 14.662 1.17148 14.662 0.502064 13.9926C-0.167355 13.3231 -0.167355 12.236 0.502064 11.5666L11.2843 0.784334L11.2897 0.789662Z" fill="white"/>
                </svg>
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