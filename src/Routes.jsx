import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './ProductScreen';
import CompareScreen from './CompareScreen';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<ProductScreen />} />
            <Route path="/CompareScreen" element={<CompareScreen />} />
        </Routes>
    </Router>
);

export default AppRoutes;
