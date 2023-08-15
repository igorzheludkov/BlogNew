import * as React from 'react'
import Svg, { Path, G, Circle } from 'react-native-svg'

export default function ClockIcon(props: any) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 32 32"
    fill={'black'}
    {...props}
  >
    <Path d="M16 0C7.164 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30.032C8.28 30.032 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14.032-14 14.032zm1-14.438V6a1 1 0 0 0-2 0v10c0 .283.118.537.308.719.017.02.03.041.048.059l4.949 4.95a1 1 0 0 0 1.414-1.415z" />
  </Svg>
  )
}
