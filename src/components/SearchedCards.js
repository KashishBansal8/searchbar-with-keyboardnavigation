import React, { useEffect, useRef } from 'react'
import Card from './Card'
import NoUserFoundCard from './NoUserFoundCard';
import { useSearchPageContext } from '../context/SearchPageContext';

const SearchedCards = () => {
    const userResultCont = useRef(null);
    const { searchedData, matchedSearchVal, selectedItem, setSelectedItem } = useSearchPageContext();

    useEffect(() => {
        if (!userResultCont.current) {
            return;
        }
        userResultCont.current.scrollIntoView({
            block: "center"
        })
    }, [selectedItem]);

    const handleMouseMove = (index) => {
        setSelectedItem(index);
    }

    return (
        <>
            {
                matchedSearchVal.length > 0 ?
                    <div className='all-cards-section flex'>
                        {

                            searchedData.length ?
                                searchedData.map((data, index) => {
                                    return (<div
                                        ref={index === selectedItem ? userResultCont : null}
                                        key={data.id}
                                        onMouseMove={() => handleMouseMove(index)}
                                        className={selectedItem === index ? "user-card active" : "user-card"}>
                                        <Card data={data} />
                                    </div>)
                                }
                                )
                                :
                                <NoUserFoundCard />
                        }
                    </div>

                    : ""
            }

        </>
    )
}

export default SearchedCards
