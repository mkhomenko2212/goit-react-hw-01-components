import styled from "@emotion/styled";

export const Container = styled.div`
margin: 20px;
padding: 40px;
background-color: ${props => props.theme.colors.backgroundColor};
text-align: center;
border-radius: 8px;
color: ${props => props.theme.colors.primaryText};
box-shadow: 5px 5px 17px 0px  ${props => props.theme.colors.shadowColor};`

export const Avatar = styled.img` 
width: 200px;
height: 200px;
background-color: ${props => props.theme.colors.backgroundColor};
border-radius: 20px;
`

export const UserName = styled.p`   
 font-weight: 500;
 font-size: 20px;
 line-height: 1.17;
 text-align: center;
 padding-top: 30px;`

export const Stats = styled.ul`
 /* list-style: none; */
 display: flex;
 /* flex-direction: column; */
 border-top: 1px solid ${props => props.theme.colors.primaryText};`

export const Label = styled.span`
 font-weight: 500;
 font-size: 20px;
 line-height: 1.17;
 padding-top: 10px;`

export const Quantity = styled.span`
 font-weight: 700;
 font-size: 24px;
 line-height: 1.17;
 padding-top: 10px;`

export const StatItem = styled.li`
 display: flex;
 flex-direction: column;
 margin-right: 20px;
`
