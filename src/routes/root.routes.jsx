import { Routes, Route } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Header from '../components/layouts/Header';
import Home from '../pages/Home';
import Faqs from '../pages/FAQs';
import Footer from '../components/layouts/Footer';
import NotFound from '../pages/NotFound';


const RootRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/preg-resp' element={<Faqs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default RootRoutes;