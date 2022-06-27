import styled from '@emotion/styled';

export const Table = styled.table`
  width: 1200px;
  text-transform: capitalize;
  text-align: center;
  margin-right: 100px;
  background-color:  ${props => props.theme.colors.backgroundColor};
  border-radius: 12px;
  box-shadow: 5px 5px 17px 0px ${props => props.theme.colors.shadowColor};
  overflow: hidden;
  & td,
  & th {
    width: calc(100% / 3);
    padding: 20px; 
    /* border-right: 2px solid #072c33; */
  }
  & thead {
    color: ${props => props.theme.colors.secondaryText};
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.primaryText};
    font-size: 64px;
  }

`;