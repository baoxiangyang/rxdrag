import { forwardRef, memo } from "react"
import { withFeedom } from "../../common";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
`

const PlaceHolder = styled.div`
  height: 20px;
  width: 50px;
  color: ${props => props.theme.token?.colorTextSecondary};
`

export type LSTextProps = {
  value?: string
}

export const LSText = memo(withFeedom<LSTextProps>(forwardRef<HTMLDivElement, LSTextProps>((props, ref) => {
  const { value, ...rest } = props;
  return (
    <Container ref={ref} {...rest}>
      {value || <PlaceHolder>Please Input</PlaceHolder>}
    </Container>
  )
})))