import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      border-style: none;
      width: 100%;
      height: 44px;
      background: none;
      &:focus {
        outline: none;
      }
`
type Props = {
    label:string;
} & React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FunctionComponent<Props> = (props)=>{
    const {label,...rest} = props
    return(
        <Label>
            <span>{props.label}</span>
            <input {...rest}/>
        </Label>
    )
}
export {Input}