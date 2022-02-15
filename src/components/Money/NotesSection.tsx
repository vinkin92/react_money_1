import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding:14px 16px;
  font-size: 14px;
`;
type Props = {
    value: string;
    onChange: (note:string) => void;
}
const NotesSection:React.FunctionComponent<Props> =(props)=>{
    const note = props.value
    const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
            props.onChange(e.target.value)
    }
    return(
        <Wrapper>
            <Input type="text" label="备注"  placeholder="请输入备注" value={note} onChange={onChange}/>
        </Wrapper>
    )
}
export {NotesSection}