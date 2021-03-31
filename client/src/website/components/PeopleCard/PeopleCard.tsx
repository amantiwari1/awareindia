/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import Details from './Details'

const PeopleCard = () => {
    return (
        <figure tw=" rounded-xl mx-auto p-2  grid grid-rows-2  gap-4 justify-center shadow-md hover:(shadow-lg) dark:(bg-darkmode2)" >
            <div tw="mx-auto space-y-3" >
                <img alt="profile" tw=" h-16 mx-auto rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_Prime_Minister%2C_Shri_Narendra_Modi_addressing_at_the_webinar_for_effective_implementation_of_Union_Budget_in_Defence_Sector.jpg/800px-The_Prime_Minister%2C_Shri_Narendra_Modi_addressing_at_the_webinar_for_effective_implementation_of_Union_Budget_in_Defence_Sector.jpg" />
                <p tw="" >Narendra Modi</p>
            </div>
            <div tw="" >
                <Details
                    name="Born"
                    value="17 September 1950 (age 70)"
                />
                <Details
                    name="Political party"
                    value="Bharatiya Janata Party"
                />
                <Details
                    name="Qualification"
                    value="None"
                />
                <Details
                    name="State"
                    value="Gujarat"
                />
            </div>

        </figure>
    )
}

export default PeopleCard
