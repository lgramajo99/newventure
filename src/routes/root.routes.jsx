import { Routes, Route } from 'react-router-dom';
import Footer from '../components/layouts/Footer';
import Home from '../pages/Home';
import Header from '../components/layouts/Header';
import NotFound from '../pages/NotFound';
import AboutUs from '../pages/AboutUs.';
import Faqs from '../pages/FAQs';

const RootRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/FAQs' element={<Faqs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default RootRoutes;