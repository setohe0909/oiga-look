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
  width: 60%;
  margin: 20px auto;
  border: 1px solid red;
  border-radius: 8px;
  padding: 20px;
`;

export const Paragraph = styled.p`
  color: ${Colors.mirage};
  width: 100%;
  margin-bottom: 30px;

  ${mq.md(css`
    width: 320px;
  `)}

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
