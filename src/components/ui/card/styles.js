import styled from '@emotion/styled';

export const Container = styled.div`
  width: 90%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Field = styled.div`
  margin-bottom: 10px;

  strong {
    margin-right: 10px;
  }
`;

export const IMG = styled.img`
  border-radius: 8px;
  box-shadow: inset 0 -3em 3em rgb(0 0 0 / 10%), 0 0 0 2px rgb(255 255 255),
    0.3em 0.3em 1em rgb(0 0 0 / 30%);
`;
