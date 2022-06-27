import PropTypes from 'prop-types';
import {Statistic, Title, StatList, Label, Percentage, Item} from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return ( <Statistic>
  <Title>{title}</Title>

     <StatList>
        {stats.map(stat => (
            <Item key = { stat.id } >
    <Label>{stat.label}</Label>
      <Percentage> {stat.percentage}%</Percentage>
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