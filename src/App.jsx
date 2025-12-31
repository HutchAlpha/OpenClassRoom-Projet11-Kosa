import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../public/Scss/Index.scss';

function App() {
    return (
    <>
        <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
    </>
  );
}

export default App;
