import React from 'react'
import ButtonLink from './ButtonLink';
import CardProp from '../types/cardProp';

const Card = (info: CardProp) => {
  return (
    <div className="bg-green-200 border-black border-2 flex flex-col items-center m-3">
    {info.name}
    <img src={info.pic} className="w-20 h-20 rounded-full"></img>
    <ButtonLink href={info.href} text={info.text}/>
    </div>
  )
}

export default Card