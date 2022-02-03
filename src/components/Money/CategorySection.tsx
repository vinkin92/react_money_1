import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  background-color: #c4c4c4;
  font-size: 24px;

  > ul {
    display: flex;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
const CategorySection:React.FunctionComponent=()=>{
return(
    <Wrapper>
        <ul>
            <li className="selected">支出</li>
            <li>收入</li>
        </ul>
    </Wrapper>
)
}
export {CategorySection}