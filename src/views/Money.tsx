import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from '../components/Money/CategorySection';
import {TagSection} from '../components/Money/TagSection';
import {NotesSection} from '../components/Money/NotesSection';
import {NumberPadSection} from '../components/Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
function Money() {
    const [selected,setSelected] = useState({
        tags:[] as string[],
        note:'',
        category:'-' as ('-' | '+'),
        amount:0
    })
    type Selected = typeof selected;  // Selected 的类型的值为 selected
    const onChange = (obj:Partial<Selected>)=>{  // Partial 表示支持部分类型，即可以忽略没有传的值，如果没有使用Partial，则必须传递所有的属性值
        setSelected({...selected,...obj})
    }
    return (
        <MyLayout>
            {selected.tags}
            <hr />
            {selected.note}
            <hr />
            {selected.category}
            <hr />
            {selected.amount}
            <TagSection selected={selected.tags} onChange={tags=> onChange({tags})}/>
            <NotesSection value={selected.note} onChange={note=> onChange({note})}/>
            <CategorySection value={selected.category} onChange={category=> onChange({category})}/>
            <NumberPadSection value={selected.amount} onChange={amount=> onChange({amount})}/>
        </MyLayout>
    );
}

export default Money;