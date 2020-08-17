import styled, { css } from "styled-components";
import { mediaMap } from "../../../utils/mixins";

export const StyledGridItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;

  ${({ width, push, pull }) => css`
    ${mediaMap(width, (value) =>
      value === "auto"
        ? `
            flex-grow: initial;
            flex-basis: initial;
            max-width: 100%;
        `
        : `
            flex-basis: ${(value / 12) * 100}%;
            max-width: ${(value / 12) * 100}%;
        `
    )}

    ${mediaMap(
      push,
      (value) => `
            margin-left: ${
              value === "auto" ? "auto" : `${(value / 12) * 100}%`
            };`
    )}

    ${mediaMap(
      pull,
      (value) => `
            margin-right: ${
              value === "auto" ? "auto" : `${(value / 12) * 100}%`
            };`
    )}
  `}
`;
