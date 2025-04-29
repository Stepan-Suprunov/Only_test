import React from 'react';
import { InfoBlock } from './components/index';
import { MainLayout } from './layouts/index';
import { data } from './data/data'


function App() {

    return (
        <MainLayout>
            <InfoBlock
                events={data.events.results}
                segmentsCount={6}
            />
        </MainLayout>
    );
};

export default App;