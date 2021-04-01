/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'


const SinglePeopleInfo = () => {
    return (
        <div tw="container mx-auto p-6 mt-4" >
            <div tw="mx-auto  grid grid-cols-1 gap-4 lg:(grid-cols-3) mb-4 " >
                <div tw="mx-auto" >
                    <img alt="profile" tw="h-80  rounded-3xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_Prime_Minister%2C_Shri_Narendra_Modi_addressing_at_the_webinar_for_effective_implementation_of_Union_Budget_in_Defence_Sector.jpg/800px-The_Prime_Minister%2C_Shri_Narendra_Modi_addressing_at_the_webinar_for_effective_implementation_of_Union_Budget_in_Defence_Sector.jpg" />
                </div>
                <div tw="lg:(col-span-2 text-left  )  space-y-4 mb-2" >
                    <p tw="text-4xl">Narendra Modi</p>
                    <p>14th Prime Minister of India</p>
                    <p>Born: 17 September 1950 (age 70)</p>
                    <p>Political party: Bharatiya Janata Party</p>
                    <p>Qualification: BA and MA</p>
                    <p>State: Gujarat</p>
                </div>
            </div>
            <div tw="mx-auto space-y-2 mb-4"  >
                <p tw="text-4xl">History Point</p>
                <p>Chief Minister of Gujarat from 2001 to 2014</p>
                <p> Member of Parliament for Varanasi</p>
                <p>Member of the Bharatiya Janata Party (BJP)</p>
                <p>Member of the Rashtriya Swayamsevak Sangh (RSS)</p>
            </div>
            <div tw="text-center" >
                <a tw="bg-gray-50  p-2  rounded-lg border border-gray-200  dark:(border border-gray-700 bg-darkmode2  hover:( border-gray-500 bg-gray-700)) hover:(bg-gray-100)" href="https://en.wikipedia.org/wiki/Narendra_Modi" target="_blank" rel="noopener noreferrer"  >More Information on wiki</a>
            </div>
 
        </div>
    )
}

export default SinglePeopleInfo
