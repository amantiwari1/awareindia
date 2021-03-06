/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import WebsiteCard from '../components/WebsiteCard/WebsiteCard'
import ListofWebsiteData from "../../data/listofwebsite.json"

const ListofWebsite = () => {
    return (
        <div tw="container mx-auto space-y-2 p-3" >
            {
                ListofWebsiteData.map((data : {
                    website: string,
                    state: string
                } ) => (
                    <WebsiteCard state={data.state} website={data.website} /> 
                ) )
            }
        </div>
    )
}

export default ListofWebsite
