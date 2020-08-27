import React from 'react'

import Pizza from './Pizza'

interface IconProps {
  name: string;
  width?: number;
}

export default function Icon({ name, width }: IconProps) {
  switch (name) {
    case 'pizza':
      return <Pizza width={`${width}px`} />
    default:
      return <></>
  }
}

Icon.defaultProps = {
  color: '#000',
  width: '100px',
}