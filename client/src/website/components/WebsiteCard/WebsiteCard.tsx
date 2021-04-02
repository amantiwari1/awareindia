/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { WebsiteCardInterface } from './WebsiteCardInferface'

const WebsiteCard = ( {  state , website} : WebsiteCardInterface ) : JSX.Element => {
    return (
        <div tw="rounded-xl flex mx-auto p-5 bg-gray-50 w-full justify-between shadow-md hover:(shadow-lg) dark:(bg-darkmode2)" >
            <p>{state}</p>
            <a href={website} target="_blank" rel="noreferrer" >View Website </a>
        </div>
    )
}

export default WebsiteCard
