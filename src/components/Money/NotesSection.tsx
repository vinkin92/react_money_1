import styled from 'styled-components';
import React, {useRef} from 'react';

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
type Props = {
    value: string;
    onChange: (note:string) => void;
}
const NotesSection:React.FunctionComponent<Props> =(props)=>{
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur = ()=>{
        if(refInput.current!== null){
            props.onChange(refInput.current.value)
        }
    }
    return(
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="请输入备注" defaultValue={props.value} ref={refInput} onBlur={onBlur}/>
            </label>
        </Wrapper>
    )
}
export {NotesSection}