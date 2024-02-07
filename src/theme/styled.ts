import styled from '@emotion/styled';

export const createStyled = (tag: keyof JSX.IntrinsicElements, options = {}) => {
  return styled(tag, options);
}
