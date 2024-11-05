import getCard from '@/app/apiCalls/getCard';
import ButtonLink from '@/app/components/ButtonLink'
import Card from '@/app/components/Card'
import IdProp from '@/app/types/idProp'
import React from 'react'

async function showCard(props: IdProp) {
  const { id } = await props.params;
  const data = await getCard(id);
  console.log(`data: ${data}`);
  console.log(`data.firstName: ${data.firstName}`);
  return (
    <div className="flex flex-col">
      <Card name={data.firstName + " " + data.lastName} pic={data.image} href="/pages/cards" text="<- Back" />
      {`id: ${data.id}`}
    </div>
  )
}

export default showCard