import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      border-style: none;
      background-color: #f5f5f5;
      width: 100%;
      height: 72px;

      &:focus {
        outline: none;
      }
    }
  }
`;
const NotesSection:React.FunctionComponent=()=>{
    return(
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="请输入备注"/>
            </label>
        </Wrapper>
    )
}
export {NotesSection}