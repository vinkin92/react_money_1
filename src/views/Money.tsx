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
    return (
        <MyLayout>
            {selected.tags}
            <hr />
            {selected.note}
            <hr />
            {selected.category}
            <hr />
            {selected.amount}
            <TagSection selected={selected.tags} onChange={(tags)=>setSelected({...selected,tags:tags})}/>
            <NotesSection value={selected.note} onChange={(note)=>setSelected({...selected,note:note})}/>
            <CategorySection value={selected.category} onChange={(category)=>setSelected({...selected,category:category})}/>
            <NumberPadSection value={selected.amount} onChange={(value)=> setSelected({...selected,amount: value})}/>
        </MyLayout>
    );
}

export default Money;