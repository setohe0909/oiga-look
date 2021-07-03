import styled from '@emotion/styled';

import { makeResponsive } from '../layout/utils/base';

export const ErrorSpan = styled.span`
  margin-top: 3px;
  margin-bottom: 0px;

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

export const FieldForm = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  height: 60px;
`;

export const InputTitle = styled.label`
  border: none;
  padding: 0;
  text-align: left;
  width: 100%;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: capitalize;

  ${(props) =>
    makeResponsive([
      {
        property: 'font-size',
        min: props.minValue,
        max: props.maxValue,
        unit: 'px',
      },
    ])}
`;

export const CustomInput = styled.input`
  border-radius: 16px !important;
  border: 0 !important;
  padding: 0 15px;
  box-shadow: inset 3px 3px 6px 0 #d9d9d9,
    inset -3px -3px 6px 0 rgba(255, 255, 255, 0.5) !important;
  background-color: white;
  height: 30px;
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
