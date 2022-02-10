import React from 'react';

import Main from '../components/Main';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/first' element={<First />}></Route>
                <Route path='/second' element={<Second />} ></Route>
                <Route path='/third' element={<Third />} ></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
