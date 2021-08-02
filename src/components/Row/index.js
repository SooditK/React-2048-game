import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { isObjEqual } from '../../utils/helpers';

// Game board row, contain 4 cell
export default class Row extends React.Component {
  static propTypes = {
    row: PropTypes.arrayOf(PropTypes.number).isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !isObjEqual(nextProps, this.props) || !isObjEqual(nextState, this.state)
    );
  }

  render() {
    const {
      props: { row }
    } = this;

    return (
      <tr>
        {/* eslint-disable react/no-array-index-key */}
        {row.map((num, idx) => (
          <Cell value={num} key={idx} />
        ))}
      </tr>
    );
  }
}
