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
    selected:number[];
    onChange:(selected:number[])=> void;  // 声明 onChange是一个函数，该函数接收一个字符串数组，返回值为 void（没有返回值）
}
const TagSection:React.FunctionComponent<Props> =(props)=>{
    const {tags,addTag} = useTags()
    const selectedTagIds = props.selected;
    const onToggleTag=(tagId:number)=>{
        const index = selectedTagIds.indexOf(tagId);
        if(index >= 0){
            props.onChange(selectedTagIds.filter(t=>t!==tagId))
        }else{
            props.onChange([...selectedTagIds,tagId])
        }
    }
    return(
        <Wrapper>
            <ol>
                {tags.map(tag=>
                    <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={selectedTagIds.indexOf(tag.id)>=0?'selected':''}>{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagSection}