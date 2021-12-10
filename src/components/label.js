import * as LabelPrimitive from "@radix-ui/react-label"
import styled from "styled-components"

const Label = styled(LabelPrimitive.Root)`
  display: block;
  font-size: ${22 / 16}rem;
  font-weight: 400;
  color: var(--color-text);
  text-align: center;
`

export default Label
