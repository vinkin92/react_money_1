import styled from 'styled-components';

const CategorySection = styled.section`
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
export {CategorySection}