import styled from 'styled-components';

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      border-style: none;
      background-color: #f5f5f5;
      width: 100%;
      height: 72px;

      &:focus {
        outline: none;
      }
    }
  }
`;
export {NotesSection}