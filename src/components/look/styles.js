import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { mq } from '../layout/utils/base';
import { Colors } from '../ui/Colors';

export const LookContainer = styled.div`
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
    width: 600px;
    height: auto;
    border-radius: 8px;
    margin: 20px auto;
  `)};
`;

export const NavBar = styled.div`
  background: ${Colors.alto};
  padding: 10px 0 10px 0;
  width: 600px;

  strong {
    color: ${Colors.persianGreen};
    text-transform: uppercase;
    font-weight: 400;
  }
`;

export const LookOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 600px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${({ image }) => image});
  cursor: pointer;
  width: 200px;
  height: 283px;
  position: relative;
  background-size: cover;

  &:hover {
    background-color: rgb(0 156 155 / 22%);

    &:before {
      position: absolute;
      content: '';
      background-color: #009c9b7d;
      width: 100%;
      height: 100%;
    }

    &::after {
      position: absolute;
      content: '';
      background-color: ${Colors.persianGreen};
      width: 40px;
      height: 40px;
      border: 10px solid rgb(70 195 195 / 50%);
      border-radius: 50%;
    }
  }
`;
