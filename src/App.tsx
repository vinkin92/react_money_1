import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';


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

function Tags() {
    return (
        <Layout>
            <div>标签页</div>
        </Layout>
    );
}

function Money() {
    return (
    <Layout>
        <div>记账页</div>
    </Layout>
    );
}

function Statistics() {
    return (
    <Layout>
        <div>统计页</div>
    </Layout>
    );
}

function Notfind() {
    return (
        <div>你访问的页面不存在</div>
    );
}


export default App;
