import React from 'react';
import Header from '@/components/UI/Header/Header.jsx';
import { Outlet } from 'react-router';
import AnimatedLayout from '@/components/Layout/AnimatedLayout.jsx';
import Aside from '@/components/UI/Aside/Aside.jsx';
import Navbar from '@/components/UI/Navbar/Navbar.jsx';
import { AsideProvider } from '@/context/AsideContext.jsx';
import HeaderActions from '@/components/UI/HeaderActions/HeaderActions.jsx';
import Banner from '@/components/UI/Banner/Banner.jsx';
import bannerSrc from '@/assets/banner/banner.png';
import Container from '@/components/UI/Container/Container.jsx';
import Footer from '@/components/UI/Footer/Footer.jsx';
import { useRouteScroll } from '@/hooks/useRouteScroll.js';
import { ModalProvider } from '@/context/ModalContext.jsx';

const Layout = () => {
    useRouteScroll();

    return (
        <ModalProvider>
            <AsideProvider>
                <Header />
                <AnimatedLayout>
                    <Outlet />
                    <Container>
                        <Banner
                            imgSrc={bannerSrc}
                            title={'Start your free trial today!'}
                            subTitle={
                                'This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.'
                            }
                            actionText={'Start a Free Trail'}
                        />
                    </Container>
                    <Footer />
                </AnimatedLayout>
                <Aside>
                    <HeaderActions />
                    <Navbar variant={'aside'} />
                </Aside>
            </AsideProvider>
        </ModalProvider>
    );
};

export default Layout;
