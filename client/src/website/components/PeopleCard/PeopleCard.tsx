/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import Details from './Details'
import { PeopleCardInterface } from './PeopleInterface'

const PeopleCard = ({ name, imageUrl, job }: PeopleCardInterface) => {
    return (
        <figure tw=" rounded-xl mx-auto pt-5 bg-gray-50 w-full grid h-64 grid-rows-2 justify-center shadow-md hover:(shadow-lg) dark:(bg-darkmode2)" >
            <div tw="mx-auto space-y-3" >
                <img alt="profile" tw=" h-16 mx-auto rounded-full" src={imageUrl} />
                <p tw="" >{name}</p>
            </div>
            <div tw="-mb-1!" >
                <div tw="mb-3" >
                    <Details
                        name="Party"
                        value={job}
                    />

                </div>

                <div tw="justify-center block text-center mt-5" >
                    <Link to="/SinglePeopleInfo" tw=" bg-gray-50  p-2  rounded-lg border border-gray-200  dark:(border border-gray-700 bg-darkmode2  hover:( border-gray-500 bg-gray-700)) hover:(bg-gray-100)" >
                        Tap to More Details
                </Link>
                </div>

            </div>

        </figure>
    )
}

export default PeopleCard
