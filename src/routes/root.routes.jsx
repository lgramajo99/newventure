import { Routes, Route } from 'react-router-dom';
import Footer from '../components/layouts/Footer';
import Home from '../pages/Home';
import Header from '../components/layouts/Header';
import NotFound from '../pages/NotFound';

const RootRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default RootRoutes;