import { Routes, Route } from 'react-router-dom';
import Header from '../components/layouts/header/Header';
import Footer from '../components/layouts/footer/Footer';
import NotFound from '../pages/NotFound';
import { lazy, Suspense } from 'react';
import Loader from '../components/common/Loader';


// Lazy loading de las páginas
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Faqs = lazy(() => import('../pages/FAQs'));
const ShopAll = lazy(() => import('../pages/ShopAll'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const WelcomeDash = lazy(() => import('../pages/dashboard/WelcomeDash'))
const HelpDash = lazy(() => import('../pages/dashboard/HelpDash'))
const SettingsDash = lazy(() => import('../pages/dashboard/SettingsDash'))
const Default = lazy(() => import('../pages/Default'))


const RootRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/faq' element={<Faqs />} />
                    <Route path='/shop' element={<ShopAll />} />
                    <Route path='/test' element={<Default />} />

                    <Route path='/dashboard' element={<Dashboard />}>
                        <Route index element={<WelcomeDash />} />
                        <Route path='help' element={<HelpDash />} />
                        <Route path='settings' element={<SettingsDash />} />

                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Suspense>
        </>
    );
};

export default RootRoutes;
