import { Routes, Route } from 'react-router-dom';
import Default from '../pages/Default';
import Footer from '../components/layouts/Footer';
import Home from '../pages/Home';
import Header from '../components/layouts/Header';

const RootRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Default />} />
            </Routes>
            <Footer />
        </>
    );
};

export default RootRoutes;