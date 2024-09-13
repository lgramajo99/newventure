import { Routes, Route } from 'react-router-dom';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import NotFound from '../pages/NotFound';
import { lazy, Suspense } from 'react';
import Loader from '../components/common/Loader';


// Lazy loading de las páginas
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Faqs = lazy(() => import('../pages/FAQs'));
const ShopAll = lazy(() => import('../pages/ShopAll'))

const RootRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/preg-resp' element={<Faqs />} />
                    <Route path='/shop' element={<ShopAll />} />
                    
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
};

export default RootRoutes;
