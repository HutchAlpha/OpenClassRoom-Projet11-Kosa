import { useState } from 'react';
import '../public/Scss/App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Bienvenue dans votre première application React !</h1>

      <div className="card">
        {}
        <button onClick={() => setCount((count) => count + 1)}>
          Le compteur est à {count}
        </button>
        <p>
          Modifiez <code>src/App.jsx</code> et sauvegardez pour voir les changements en direct.
        </p>
      </div>

      <div className="presentation">
        <h2>Les concepts de base de React</h2>
        <ul>
          <li><strong>Composants :</strong> Les composants sont les blocs de construction de base d'une application React. Ce sont des fonctions JavaScript qui retournent du JSX. Le composant actuel s'appelle `App`.</li>
          <li><strong>JSX :</strong> C'est une extension de la syntaxe JavaScript qui permet d'écrire du code qui ressemble à du HTML. Il est ensuite transformé en appels de fonctions JavaScript.</li>
          <li><strong>Props :</strong> Abréviation de "propriétés", les props permettent de passer des données d'un composant parent à un composant enfant.</li>
          <li><strong>State (État) :</strong> L'état permet à un composant de "se souvenir" d'informations comme les entrées utilisateur. `useState` est le Hook qui gère l'état.</li>
        </ul>
      </div>
    </>
  );
}

export default App;
