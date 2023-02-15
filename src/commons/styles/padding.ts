import styled from "styled-components";

export const StyledPadding = styled.div<{ height?: number; width?: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;
