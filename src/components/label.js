import * as LabelPrimitive from "@radix-ui/react-label"
import styled from "styled-components"

const Label = styled(LabelPrimitive.Root)`
  display: block;
  font-size: ${18 / 16}rem; // 18px
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
`

export default Label
