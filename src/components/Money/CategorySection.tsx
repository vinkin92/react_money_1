import styled from 'styled-components';
import React, {useState} from 'react';

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
    const [categoryList] = useState<('-'|'+')[]>(['-','+'])
    const [category,setCategory]=useState('-')
    const categoryMap = {'-':'支出','+':'收入'}
return(
    <Wrapper>
        <ul>
            {categoryList.map(c=>
                <li className={category ===c?'selected':''} onClick={()=>setCategory(c)} key={c}>{categoryMap[c]}</li>
            )}
        </ul>
    </Wrapper>
)
}
export {CategorySection}