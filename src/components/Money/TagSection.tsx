import styled from 'styled-components';

const TagSection = styled.section`
  background-color: #FFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  > ol {
    margin: 0 -12px;

    > li {
      background-color: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    font-family: inherit;
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #333;
    margin-top: 8px;
  }
`;
export {TagSection}