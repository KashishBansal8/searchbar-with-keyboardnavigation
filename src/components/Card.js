import React from 'react'
import { useSearchPageContext } from '../context/SearchPageContext';

const Card = ({ data }) => {
    const { matchedSearchVal } = useSearchPageContext();
    const itemName = data.items.filter((item) => item.toLowerCase().includes(matchedSearchVal.toLowerCase()));
    const createMarkup = (html) => {
        return { __html: html }
    }
    return (
        <div className='flex card-section'>
            <p className='user-id' dangerouslySetInnerHTML={createMarkup(data.id)}></p>
            <p className='user-name' dangerouslySetInnerHTML={createMarkup(data.name)}></p>
            {
                itemName.length ?
                    itemName.map((itemName, index) =>
                        <ul key={index}>
                            <li>"{itemName}" found in items</li>
                        </ul>
                    )
                    : ""
            }
            <p className='user-address' dangerouslySetInnerHTML={createMarkup(data.address)}></p>
            <p className='user-pincode' dangerouslySetInnerHTML={createMarkup(data.pincode)}></p>
        </div>
    )
}

export default Card
