import { IntrinsicElements, styled, StyledOptions, StyledTag } from "@styles-engine/api";

export const createStyled = <Tag extends StyledTag>(
    tag: Tag,
    options?: StyledOptions<IntrinsicElements[Tag]>
) => {
  return styled<Tag>(tag, options);
}
