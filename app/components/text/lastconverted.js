import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import Moment from 'moment';
import Styles from './styles';

const LastConverted = ({
  date, base, quote, conversionRate,
}) => (
  <Text style={Styles.smallText}>
    1
    {' '}
    {base}
    {' '}
    =
    {' '}
    {conversionRate}
    {' '}
    {quote}
    {' '}
    as of
    {' '}
    {Moment(date).format('MMMM D, YYYY')}
  </Text>
);
LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};
export default LastConverted;
