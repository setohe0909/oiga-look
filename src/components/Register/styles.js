import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { mq } from '../layout/utils/base';
import { Colors } from '../ui/Colors';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  height: 96vh;
  background: ${Colors.white};

  ${mq.md(css`
    width: 60%;
    height: auto;
    border-radius: 8px;
    margin: 20px auto;
  `)};
`;

export const Paragraph = styled.p`
  color: ${Colors.mirage};
  width: 100%;
  width: 320px;
  margin-bottom: 30px;

  a {
    color: ${Colors.persianGreen};
  }
`;

export const Button = styled.button`
  background: ${Colors.persianGreen};
  border: 0;
  border-radius: 8px;
  padding: 20px;
  color: ${Colors.white};
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
  width: 320px;
  cursor: pointer;

  &:hover {
    background: ${Colors.mosque};
  }
`;
