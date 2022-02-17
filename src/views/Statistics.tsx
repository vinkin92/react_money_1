import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../components/Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../components/useTags';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
`
function Statistics() {
    const [category,setCategory] = useState<'+' | '-'>('-')
    const {records} = useRecords()
    const {getName} = useTags()
    // 收入支出分開
    const selectedRecords = records.filter(r => r.category === category)
    return (
        <Layout>
            <CategorySection value={category} onChange={value=> setCategory(value)}/>
        <div>
            {
                selectedRecords.map(r=>{
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>
                        {r.note && <div className="note">{r.note}</div>}
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                    </Item>
                })
            }
        </div>
        </Layout>
    );
}
export default Statistics;