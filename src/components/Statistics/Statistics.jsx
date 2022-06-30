import PropTypes from 'prop-types';
import {Statistic, Title, StatList, Label, Percentage, Item} from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return ( <Statistic>
      {tittle && <Title>{title}</Title>}

     <StatList>
        {stats.map(({id, label, percentage}) => (
            <Item key = { id } >
    <Label>{label}</Label>
      <Percentage> {percentage}%</Percentage>
    </Item>))}
  </StatList>
</Statistic>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
}
  
export default Statistics;