import styled from 'styled-components';
import React, {useState} from 'react';

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
// 表示 TagSection 的类型为 React的FunctionComponent, FunctionComponent 可以用 FC代替，源码中有写 FC=FunctionComponent
const TagSection:React.FunctionComponent=()=>{
    const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
    const [selectedTags,setSelectedTags]=useState<string[]>([])
    const onAddTag=()=>{
        const tagName = window.prompt('请输入新增的标签');
        if(tagName !== null){
            setTags([...tags,tagName])
        }
    }
    const onToggleTag=(tag:string)=>{
        // 查看选中的元素数组中是否含有该标签，
        const index = selectedTags.indexOf(tag);
        if(index >= 0){
            // 如果 tag 之前已经被选中，则复制所有没有被选中的 tag 作为新的 selectedTag
            setSelectedTags(selectedTags.filter(t=>t!==tag))
        }else{
            setSelectedTags([...selectedTags,tag])
        }
    }
    return(
        <Wrapper>
            <ol>
                // 遍历 tags 数组，使其每个值对应一个标签
                // onclick=一个匿名箭头函数，则表示点击的时候才会执行函数并传递 tag 的值，如果直接写函数，则会立即执行
                {tags.map(tag=>
                    <li key={tag} onClick={()=>{onToggleTag(tag)}} className={selectedTags.indexOf(tag)>=0?'selected':''}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagSection}