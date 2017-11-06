import React from 'react'
import { node, object, string } from 'prop-types'

const Grid = ({
  component: Component = 'div',
  gap: gridGap = '1rem',
  columnSize: gridAutoColumns = '1fr',
  rowSize: gridAutoRows = '1fr',
  style,
  children,
}) => (
  <Component style={ {
    display: 'grid',
    gridGap,
    gridAutoColumns,
    gridAutoRows,
    ...style,
  } }>
    { children }
  </Component>
)

Grid.propTypes = {
  component: node,
  gap: string,
  columnSize: string,
  rowSize: string,
  style: object,
  children: node,
}

export default Grid