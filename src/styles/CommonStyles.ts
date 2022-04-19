import styled from "styled-components";

export const Label = styled.strong`
  font-size: 1.5em;
`

export const Arrow = styled.div<{ color?: string }>`
    font-size: 2em;
    cursor: pointer;
    padding: 0 0.5em;
    color: ${props => props.color || '#000'};
    font-weight: bold;
`;