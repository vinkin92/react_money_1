import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from '../components/Money/CategorySection';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../components/useTags';
import styled from 'styled-components';
import dayjs from 'dayjs'
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
const Header = styled.h3`
  font-size:18px;
  line-height: 20px;
  padding: 10px 16px;
`
function Statistics() {
    const [category,setCategory] = useState<'+' | '-'>('-')
    const {records} = useRecords()
    const {getName} = useTags()
    // 收入支出分開
    const selectedRecords = records.filter(r => r.category === category)
    const hash:{[K:string]:RecordItem[]} = {} // 用來存儲時間
    selectedRecords.map(r=>{ // 對選中的選項進行遍歷
        const key = dayjs(r.createdAt).format('YYYY-MM-DD')
        if(!(key in hash)){  // 如果 key 不在 hash 裏面，即沒有數據，則初始化一個數組
            hash[key] = []
        }
        hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a,b)=>{
        if(a[0] === b[0]) return 0
        if(a[0] > b[0]) return -1
        if(a[0] < b[0]) return 1
        return 0
    })
    return (
        <Layout>
            <CategorySection value={category} onChange={value=> setCategory(value)}/>
            {array.map(([data,records]) =>
                <div>
                    <Header>{data}</Header>
                    <div>
                        {
                            records.map(r=>{
                                return <Item>
                                    <div className="tags oneLine">
                                        {r.tagIds
                                            .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                            // [span,span,span] => [span,',',span,',']，多個標簽之間添加逗號
                                            .reduce((result,span,index,array)=>
                                                result.concat(index < array.length-1 ? [span,'，'] : [span]),[] as ReactNode[])
                                        }
                                    </div>
                                    {r.note && <div className="note">{r.note}</div>}
                                    <div className="amount">
                                        ￥{r.amount}
                                    </div>
                                </Item>
                            })
                        }
                    </div>
                </div>

            )}
        </Layout>
    );
}
export default Statistics;