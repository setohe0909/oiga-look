import { css } from "@emotion/core";
import { omit } from "lodash";

export const breakpoints = {
  xsm: 370,
  sm: 768,
  md: 1024,
  lg: 1440,
  xlg: 2000,
};

export const getMatchMedias = () => {
  const matchMedias = {
    xs: `(max-width: ${breakpoints.sm - 1}px)`,
    sm: `(max-width: ${breakpoints.md - 1}px) and (min-width: ${
      breakpoints.sm
    }px)`,
    md: `(max-width: ${breakpoints.lg - 1}px) and (min-width: ${
      breakpoints.md
    }px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
  };

  return Object.keys(matchMedias).reduce((acc, key) => {
    acc[matchMedias[key]] = [window.matchMedia(matchMedias[key]), key];
    return acc;
  }, {});
};

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  const prefix = typeof breakpoints[label] === "string" ? "" : "min-width:";
  const suffix = typeof breakpoints[label] === "string" ? "" : "px";
  accumulator[label] = (cls) => css`
    @media (${prefix + breakpoints[label] + suffix}) {
      ${cls};
    }
  `;
  return accumulator;
}, {});

/**
 * makeResponsive function creates all the middle points for every breakpoint using a min/max
 * @param {Array} responsiveBlock - Usage: [{ property:string, min:number, max:number, unit:string}]
 * @returns {String} Emotion CSS block
 */
export const makeResponsive = (responsiveBlock) => {
  const reducedMq = omit(mq, "xsm");
  const deltas = responsiveBlock.map((item) => ({
    ...item,
    delta: (item.max - item.min) / 3,
    first: `
      ${item.property}: ${item.min}${item.unit || ""};
    `,
  }));

  return Object.keys(reducedMq).reduce(
    (acc, breakpoint, idx) => css`
      ${acc} ${reducedMq[breakpoint](css`
        ${deltas.reduce(
          (group, delta) => `
            ${group}
            ${delta.property}: ${delta.min + delta.delta * (idx + 1)}${
            delta.unit || ""
          };
          `,
          ""
        )};
      `)};
    `,
    deltas.reduce(
      (firsts, delta) => css`
        ${firsts} ${delta.first};
      `,
      ""
    )
  );
};
