import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background-color: #FFF;
  padding:12px 16px;
  >ol{
    margin:0 -12px;
    >li{
      background-color: #D9D9D9;
      border-radius:18px;
      display: inline-block;
      padding: 3px 18px;
      font-size:14px;
      margin:8px 12px;
    }
  }
  >button{
    font-family: inherit;
    background: none;
    border:none;
    padding:2px 4px;
    border-bottom:1px solid #333;
    color:#333;
    margin-top:8px;
  }
`;
const NotesSection = styled.section`
  background: #f5f5f5;
  padding:0 16px;
  font-size:14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      border-style: none;
      background-color: #f5f5f5;
      width:100%;
      height: 72px;
      &:focus{
        outline: none;
      }
    }
  }
`;
const CategorySection = styled.section`
  background-color: #c4c4c4;
  font-size:24px;
  > ul{
    display: flex;
    >li{
      width:50%;
      text-align: center;
      padding:16px 0;
      position: relative;
      &.selected::after{
        content:'';
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
const NumberPadSection = styled.section`

`;

function Money() {
    return (
        <Layout>
            <TagSection className="tags">
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="请输入备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清除</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export default Money;