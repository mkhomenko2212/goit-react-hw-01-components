import styled from "@emotion/styled";

export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 330px;
  margin: 20px;
  padding: 28px;
  background-color:  ${props => props.theme.colors.backgroundColor};
  border-radius: 10px;
  box-shadow: 5px 5px 17px 0px  ${props => props.theme.colors.shadowColor};
`;

export const Status = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin: 20px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primaryText};
`;

export const Name = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryText};
`;