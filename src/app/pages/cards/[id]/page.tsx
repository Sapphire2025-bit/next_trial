  import ButtonLink from '@/app/components/ButtonLink'
  import Card from '@/app/components/Card'
  import IdProp from '@/app/types/idProp'
  import React from 'react'

  async function showCard(props: IdProp) {
    const {id} = await props.params;
    return (
      <div className="flex flex-col">
          <Card name="Yossi" pic="/images/green_face.png" href="/pages/cards" text="<- Back"/>
          {`id: ${id}`}
      </div>
    )
  }

  export default showCard