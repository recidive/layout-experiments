import React from 'react'
import { node, object, string } from 'prop-types'
import styled from 'styled-components'

const Grid = ({
  component: Component = 'div',
  style,
  children,
  className,
}) => (
  <Component className={ className } style={ { ...style } }>
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

export default styled(Grid)`
  display: grid;
  grid-gap: ${ ({ gap }) => gap };
  grid-auto-columns: ${ ({ columnSize }) => columnSize };
  grid-auto-rows: ${ ({ rowSize }) => rowSize };
`
