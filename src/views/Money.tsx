import Layout from '../components/Layout';
import React from 'react';
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
    return (
        <MyLayout>
            <TagSection />
            <NotesSection />
            <CategorySection />
            <NumberPadSection />
        </MyLayout>
    );
}

export default Money;