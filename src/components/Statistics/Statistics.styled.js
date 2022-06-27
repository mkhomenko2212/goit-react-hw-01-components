import styled from "@emotion/styled";

export const Statistic= styled.section`
  text-align: center;
  margin: 0 120px;
  box-shadow: 5px 5px 17px 0px ${props => props.theme.colors.shadowColor};
`

export const Title = styled.h2`
  text-transform: uppercase;
  padding: 20px;
`;

export const StatList = styled.ul`
 list-style: none;
  display: flex;
  padding: 40px;
  
`;

export const Item = styled.li`
  padding: 20px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border: 2px solid ${props => props.theme.colors.shadowColor};
`;

export const Label = styled.span`
  display: block;
`;

export const Percentage = styled.span`
  display: block;
`; 