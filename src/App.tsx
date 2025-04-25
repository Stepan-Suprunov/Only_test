import React from 'react';
import 'swiper/css';
import {Swiper, Circle} from './components/index';
import {MainLayout} from './layouts/index';

function App() {

    return (
        <MainLayout>
            <Circle pointsCount={4}/>
            <Swiper/>
        </MainLayout>
    );
};

export default App;