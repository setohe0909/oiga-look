import styled from '@emotion/styled';

import { makeResponsive } from '../layout/utils/base';
import { Colors } from '../ui/Colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Icon = styled.i`
  color: ${Colors.persianGreen};
  position: absolute;
  top: 13px;
  left: 11px;
`;

export const ErrorSpan = styled.span`
  margin-top: -17px;
  margin-bottom: 20px;
  margin-left: 5px;
  color: ${Colors.watermelon};

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

export const CustomInput = styled.input`
  border-radius: 8px !important;
  background-color: white;
  width: 290px;
  padding: 10px;
  padding-left: 30px;
  height: 20px;
  margin-bottom: 20px;
  outline: none;

  ${(props) =>
    makeResponsive([
      {
        property: 'font-size',
        min: props.minValue,
        max: props.maxValue,
        unit: 'px',
      },
    ])}

  &:placeholder {
  }
`;
