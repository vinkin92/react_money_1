import React from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
    return (
        <Wrapper>
            <Main>
                <Routes>
                    <Route index element={<Money/>}/>
                    <Route path="tags" element={<Tags/>}/>
                    <Route path="money" element={<Money/>}/>
                    <Route path="statistics" element={<Statistics/>}/>
                    <Route path="*" element={<Notfind/>}/>
                </Routes>
            </Main>
            <Nav />
        </Wrapper>
    );
}

function Tags() {
    return (
        <div>标签页</div>
    );
}

function Money() {
    return (
        <div>记账页</div>
    );
}

function Statistics() {
    return (
        <div>统计页</div>
    );
}

function Notfind() {
    return (
        <div>你访问的页面不存在</div>
    );
}


export default App;
