import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '@/pages/Home/Home.jsx';
import Layout from '@/components/Layout/Layout.jsx';
import Movies from '@/pages/Movies/Movies.jsx';
import MovieDetails from '@/pages/MovieDetails/MovieDetails.jsx';
import Support from '@/pages/Support/Support.jsx';
import Subscriptions from '@/pages/Subscriptions/Subscriptions.jsx';
import TvDetails from '@/pages/TvDetails/TvDetails.jsx';
import Genres from '@/pages/Genres/Genres.jsx';
import Search from '@/pages/Search/Search.jsx';

const AppRouter = () => {
    return (
        <BrowserRouter basename="/streamvibe">
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={'movies'} element={<Movies />} />
                    <Route path={'movies/:id'} element={<MovieDetails />} />
                    <Route path={'tv/:id'} element={<TvDetails />} />
                    <Route path={'genres/:id'} element={<Genres />} />
                    <Route path={'support'} element={<Support />} />
                    <Route path={'subscriptions'} element={<Subscriptions />} />
                    <Route path={'search'} element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
