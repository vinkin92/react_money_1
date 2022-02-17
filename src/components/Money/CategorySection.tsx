import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
type Props = {
    value:'-'|'+';
    onChange:(category:'-'|'+')=>void;
}
const CategorySection:React.FunctionComponent<Props> =(props)=>{
    const [categoryList] = useState<('-'|'+')[]>(['-','+'])
    const category = props.value;
    const categoryMap = {'-':'支出','+':'收入'}
return(
    <Wrapper>
        <ul>
            {categoryList.map(c=>
                <li className={category ===c?'selected':''} onClick={()=>props.onChange(c)} key={c}>{categoryMap[c]}</li>
            )}
        </ul>
    </Wrapper>
)
}
export {CategorySection}