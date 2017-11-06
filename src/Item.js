import React from 'react'
import { node, number, object } from 'prop-types'

const Item = ({
  component: Component = 'div',
  x = 1,
  y = 1,
  cols = 1,
  rows = 1,
  style,
  children,
}) => (
  <Component style={ {
    gridColumn: x + ' / ' + (x + cols),
    gridRow: y + ' / ' + (y + rows),
    ...style,
  } }>
    { children }
  </Component>
)

Item.propTypes = {
  component: node,
  x: number,
  y: number,
  cols: number,
  rows: number,
  style: object,
  children: node,
}

export default Item