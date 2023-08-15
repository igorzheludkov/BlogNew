import * as React from 'react'
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export default function TelegramIcon(props: any) {
  return (
    <Svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <Circle cx={16} cy={16} r={14} fill='url(#a)' />
      <Path
        d='M22.987 10.209c.124-.806-.642-1.441-1.358-1.127L7.365 15.345c-.514.225-.476 1.003.056 1.173l2.942.937c.562.179 1.17.086 1.66-.253l6.632-4.582c.2-.138.418.147.247.323l-4.774 4.922c-.463.477-.371 1.286.186 1.636l5.345 3.351c.6.376 1.37-.001 1.483-.726l1.845-11.917Z'
        fill='#fff'
      />
      <Defs>
        {/*@ts-ignore*/}
        <LinearGradient id='a' x1={16} y1={2} x2={16} y2={30} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#37BBFE' />
          <Stop offset={1} stopColor='#007DBB' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
