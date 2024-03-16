import styled from 'styled-components';

export const StyledButtonM = styled.button`
  display: inline-block;
  width: 240px;
  height: 48px;
  border: none;
  border-radius: 8px;
  padding: 0.75em;
  font:
    normal normal 600 14px/16px Inter,
    sans-serif;
  text-align: center;
  color: #fff;
  background-color: #9d4edd80;

  &:hover {
    cursor: pointer;
    background-color: #9044ce;
  }

  &:focus {
    background-color: #ab65e4;
  }

  &:disabled {
    background-color: #9d4edd80;
  }
`;
