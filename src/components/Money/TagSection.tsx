import styled from 'styled-components';
import React from 'react';
import {useTags} from '../useTags';

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
      &.selected{
        background-color: #f60;
      }
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
type Props = {
    selected:string[];
    onChange:(selected:string[])=> void;  // 声明 onChange是一个函数，该函数接收一个字符串数组，返回值为 void（没有返回值）
}
const TagSection:React.FunctionComponent<Props> =(props)=>{
    const {tags,setTags} = useTags()
    const selectedTags = props.selected;
    const onAddTag=()=>{
        const tagName = window.prompt('请输入新增的标签');
        if(tagName !== null){
            setTags([...tags,tagName])
        }
    }
    const onToggleTag=(tag:string)=>{
        const index = selectedTags.indexOf(tag);
        if(index >= 0){
            props.onChange(selectedTags.filter(t=>t!==tag))
        }else{
            props.onChange([...selectedTags,tag])
        }
    }
    return(
        <Wrapper>
            <ol>
                {tags.map(tag=>
                    <li key={tag} onClick={()=>{onToggleTag(tag)}} className={selectedTags.indexOf(tag)>=0?'selected':''}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagSection}