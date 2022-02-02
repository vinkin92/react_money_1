import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
`;
const Nav = styled.nav`
  border: 1px solid pink;

  > ul {
    display: flex;

    > li {
      width: 33.3%;
      text-align: center;
    }
  }
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
            <Nav>
                <ul>
                    <li>
                        <Link to="/tags">标签页</Link>
                    </li>
                    <li>
                        <Link to="/money">记账页</Link>
                    </li>
                    <li>
                        <Link to="/statistics">统计页</Link>
                    </li>
                </ul>
            </Nav>
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
