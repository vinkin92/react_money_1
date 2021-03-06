import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';
const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3%;
      text-align: center;
      padding: 4px 0;
      >a{
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected{
          color:red;
          .icon{
            fill:red;
          }
        }
      }
      
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" className={({ isActive }) =>  (isActive ? "selected" : "")}>
                        <Icon name="tag"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" className={({ isActive }) =>  (isActive ? "selected" : "")}>
                        <Icon name="notePad"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" className={({ isActive }) =>  (isActive ? "selected" : "")}>
                        <Icon name="chart"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;