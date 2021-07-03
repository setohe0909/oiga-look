import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { mq, makeResponsive } from '../../layout/utils/base';

import { Colors } from '../Colors';

export const ContainerModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: inherit;
  padding: 5px 15px;
  justify-content: space-between;
`;

export const HeaderModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-top: ${(props) =>
    props.dimension === 'medium' || props.dimension === 'small' ? '10px' : '0'};
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  margin-bottom: 15px;
  cursor: pointer;
  outline: none;

  & i {
    font-size: 22px;
    padding-bottom: 0px;
    color: ${Colors.watermelon};
  }
`;

export const FooterModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid #c0c0c0;

  & button {
    margin-top: 15px;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`;

export const BodyModal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 5px;
`;

export const ModalTitle = styled.strong`
  color: #626f75;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;

  ${(props) =>
    makeResponsive([
      {
        property: 'font-size',
        min: props.min,
        max: props.max,
        unit: 'px',
      },
    ])}
`;

export const cssPortalClass = css`
  .overlay-base {
    padding: 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    transition-property: background-color, opacity;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay-after {
    background-color: rgba(147, 158, 164, 0.8);
    opacity: 1;
  }

  .overlay-before {
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
  }

  .content-base {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    margin: 0 auto;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0%;
    width: 0%;
    background-color: transparent;
    transition-property: background-color, width, height;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
  }

  .content-after-full-screen {
    width: 89%;
    height: 96%;
    background-color: ${Colors.white};
    margin-right: -2px;
    margin-top: -30px;
    border-radius: 5px;

    ${mq.sm(css`
      width: 89%;
      height: 96%;
      margin-right: 15px;
    `)}

    ${mq.md(css`
      width: calc(100% - 108px);
      height: 99%;
      margin-right: 1rem;
    `)}
  }

  .content-after-medium {
    width: 89%;
    height: 96%;
    background-color: ${Colors.white};
    margin-right: -2px;
    margin-top: -30px;
    border-radius: 5px;

    ${mq.sm(css`
      width: 89%;
      height: 96%;
      margin-right: 15px;
    `)}

    ${mq.md(css`
      width: calc(86% - 68px);
      height: 86%;
      margin-right: 9rem;
    `)}
  }

  .content-after-small {
    width: 89%;
    height: 96%;
    background-color: ${Colors.white};
    margin-right: -2px;
    margin-top: -30px;
    border-radius: 5px;

    ${mq.sm(css`
      width: 89%;
      height: auto;
      margin-right: 15px;
    `)}

    ${mq.md(css`
      width: 50%;
      height: auto;
      margin-left: 9rem;
      margin: 0 auto;

      .HeaderModal-small {
        padding: 0 20px;
      }

      .BodyModal-small {
        padding: 10px 20px;
      }
    `)}
  }

  .content-after-tiny {
    width: 89%;
    height: 96%;
    background-color: ${Colors.white};
    margin-right: -2px;
    margin-top: -30px;
    border-radius: 5px;
    padding: 10px;

    ${mq.sm(css`
      width: 89%;
      height: auto;
      margin-right: 15px;
    `)}

    ${mq.md(css`
      width: 30%;
      height: auto;
      margin-left: 9rem;
      margin: 0 auto;

      .HeaderModal-small {
        padding: 0 20px;
      }

      .BodyModal-small {
        padding: 10px 20px;
      }
    `)}
  }

  .content-before {
    width: 0%;
    height: 0%;
    background-color: transparent;
  }
`;
