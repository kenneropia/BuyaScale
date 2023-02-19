import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default App