/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import {DetailsInterface} from "./PeopleInterface"

const Details = ( {name, value} : DetailsInterface) => {
    return (
        <div tw="flex text-center text-sm" >
            <p>{value}</p>
        </div>
    )
}

export default Details
