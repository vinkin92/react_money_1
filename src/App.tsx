import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import Notfind from './views/Notfind';

function App() {
    return (
        <Routes>
            <Route index element={<Money/>}/>
            <Route path="tags" element={<Tags/>}/>
            <Route path="money" element={<Money/>}/>
            <Route path="statistics" element={<Statistics/>}/>
            <Route path="*" element={<Notfind/>}/>
        </Routes>
    );
}
export default App;
