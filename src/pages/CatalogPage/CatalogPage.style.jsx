import styled from 'styled-components';

export const CatalogSection= styled.section`
 padding: 60px 0 0 0 ;
`;

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
  margin: 50px auto 30px;

  &:hover,
  &:focus {
    color: var(--hover-btn-text);
    background: var(--blue);
  }
`;

