import React from 'react'
import { node, number, object } from 'prop-types'
import styled from 'styled-components'

const Item = ({
  component: Component = 'div',
  style,
  children,
  className,
}) => (
  <Component className={ className } style={ { ...style } }>
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

export default styled(Item)`
  grid-column: ${ ({ x, cols }) => (x + ' / ' + (x + cols)) };
  grid-row: ${ ({ y, rows }) => (y + ' / ' + (y + rows)) };
`
