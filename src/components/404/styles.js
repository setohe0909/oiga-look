import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { mq } from '../layout/utils/base';
import { Colors } from '../ui/Colors';

export const Page404Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  height: 96vh;
  background: ${Colors.white};

  img {
    width: 400px;
  }

  ${mq.md(css`
    width: 60%;
    height: auto;
    border-radius: 8px;
    margin: 20px auto;
  `)};
`;
