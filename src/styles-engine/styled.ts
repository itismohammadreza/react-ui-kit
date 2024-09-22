import { $styled, $StyledOptions } from "@styles-engine/api";

export const createStyled = <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: $StyledOptions<JSX.IntrinsicElements[Tag]>
) => {
  return $styled<Tag>(tag, options);
}
