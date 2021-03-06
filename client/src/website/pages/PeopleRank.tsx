import React from 'react'
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import {PeopleCard} from '../components'
import PeopleData from "../../data/people.json"

const PeopleRank = () => {
    return (
        <div tw="container mx-auto mt-3 grid sm:(grid-cols-2) md:(grid-cols-3) lg:(grid-cols-4) xl:(grid-cols-5) 2xl:(grid-cols-6) gap-2">

            {
            PeopleData.map((people) => (
                <PeopleCard name={people.name} imageUrl={people.image}  job={people.job} />
            ))
            }
         
        </div>
    )
}

export default PeopleRank
