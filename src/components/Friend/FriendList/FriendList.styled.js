import styled from "@emotion/styled";

export const ListOfFriends = styled.ul`
margin-right: 120px;
flex-direction: column;
 & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`