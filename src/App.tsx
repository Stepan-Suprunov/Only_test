import React from 'react';
import { InfoBlock } from './components/index';
import { MainLayout } from './layouts/index';
import { events } from './data/data'


function App() {

    return (
        <MainLayout>
            <InfoBlock events={events}/>
        </MainLayout>
    );
};

export default App;