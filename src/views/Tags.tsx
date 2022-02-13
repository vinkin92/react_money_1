import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {useTags} from '../components/useTags';

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    margin: 0 16px;
    >a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #767676;
  color: white;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

function Tags() {
    const {tags,setTags} = useTags()
    return (
        <Layout>
            <TagList>
                {
                    tags.map(tag => <li key={tag}>
                        <Link to={'/tags/'+tag}>
                            <span className="oneLine">{tag}</span>
                            <Icon name="right"/>
                        </Link>
                    </li>)
                }
            </TagList>
            <Center>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;