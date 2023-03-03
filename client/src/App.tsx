import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default App