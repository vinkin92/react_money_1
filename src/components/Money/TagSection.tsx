import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  background-color: #FFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  > ol {
    margin: 0 -12px;

    > li {
      background-color: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    font-family: inherit;
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #333;
    margin-top: 8px;
  }
`;
// 表示 TagSection 的类型为 React的FunctionComponent, FunctionComponent 可以用 FC代替，源码中有写 FC=FunctionComponent
const TagSection:React.FunctionComponent=()=>{
    return(
        <Wrapper>
            <ol>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ol>
            <button>新增标签</button>
        </Wrapper>
    )
}
export {TagSection}