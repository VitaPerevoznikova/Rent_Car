import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  background-color: var(--bg-white);
  padding: 14px 40px;
  outline: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #3470ff;
  display: block;
  margin: 40px auto;

  &:hover,
  &:focus {
    color: var(--hover-btn-text);
    background: var(--blue);
  }
`;

