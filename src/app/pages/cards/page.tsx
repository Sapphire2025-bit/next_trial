import React from 'react'
import Card from '@/app/components/Card'
import getAll from '@/app/apiCalls/getAll'
import DummyData from '@/app/types/dummyData';

async function allCards() {
  const data = await getAll();
  return (
    <div className="grid grid-cols-3">
      {data.map((info: DummyData) => 
        <Card key={info.id} name={info.firstName + " " + info.lastName} pic={info.image} href={`/pages/cards/${info.id}`} text="show more ->"/>
      )}
    </div>
  )
}

export default allCards