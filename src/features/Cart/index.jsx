import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';
import { formatPrice } from 'utils';
import "./index.css"
import { Button } from '@material-ui/core';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);
  return <div className="price">
    Cart Feature {formatPrice(cartTotal)}
  </div>;
}

export default CartFeature;
