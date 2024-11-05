import React from 'react'
import Card from '@/app/components/Card'

const cards = [{name: "Yossi", pic: "/images/green_face.png"},
  {name: "Motti", pic: "/images/purple_face.png"},
  {name: "Motti2", pic: "/images/purple_face.png"},
  {name: "Motti3", pic: "/images/purple_face.png"}]

function allCards() {
  return (
    <div className="grid grid-cols-3">
      {cards.map((info, id) => 
        <Card key={id} name={info.name} pic={info.pic} href={`/pages/cards/${id}`} text="show more ->"/>
      )}
    </div>
  )
}

export default allCards