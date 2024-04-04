import React, { useEffect, useState } from 'react';
import SearchIcon from "../images/search-icon.png";
import CloseIcon from "../images/close.png";
import useMockSearchData from '../utils/useMockSearchData'
import { useSearchPageContext } from '../context/SearchPageContext';

const Searchbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const mockData = useMockSearchData();
    const { searchedData, setSearchedData, selectedItem, setSelectedItem, setMatchedSearchVal } = useSearchPageContext();

    useEffect(() => {
        const lowerCaseSearchValue = searchValue.toLowerCase();
        const filteredData = mockData.filter((data) =>
            data.id.toLowerCase().includes(lowerCaseSearchValue) ||
            data.name.toLowerCase().includes(lowerCaseSearchValue) ||
            data.address.toLowerCase().includes(lowerCaseSearchValue) ||
            data.pincode.toLowerCase().includes(lowerCaseSearchValue) ||
            data.items.some((item) => item.toLowerCase().includes(lowerCaseSearchValue))
        )
            .map((item) => {
                let newId = item.id.replace(
                    new RegExp(lowerCaseSearchValue, "gi"),
                    match => `<mark style="background: none; color: blue;">${match}</mark>`
                );
                let newName = item.name.replace(
                    new RegExp(lowerCaseSearchValue, "gi"),
                    match => `<mark style="background: none; color: blue;">${match}</mark>`
                );
                let newAddress = item.address.replace(
                    new RegExp(lowerCaseSearchValue, "gi"),
                    match => `<mark style="background: none; color: blue;">${match}</mark>`
                );
                let newPincode = item.pincode.replace(
                    new RegExp(lowerCaseSearchValue, "gi"),
                    match => `<mark style="background: none; color: blue;">${match}</mark>`
                );
                return {
                    ...item,
                    id: newId,
                    name: newName,
                    address: newAddress,
                    pincode: newPincode
                }
            })
        setSearchedData(filteredData);
        setMatchedSearchVal(searchValue);
    }, [searchValue]);

    const handleClose = () => {
        setSearchValue("");
        setSearchedData([]);
        setSelectedItem(-1);
    }

    const handleKeyDown = (e) => {
        let nextSelectedItem = 0;
        if (e.key === "ArrowUp") {
            nextSelectedItem = (selectedItem + searchedData.length - 1) % searchedData.length;
        }
        else if (e.key === "ArrowDown") {
            nextSelectedItem = (selectedItem + 1) % searchedData.length
        }
        setSelectedItem(nextSelectedItem);
    }
    return (
        <div className='flex search-bar-section'
            tabIndex={1}
            onKeyDown={handleKeyDown}
            onBlur={handleClose}
        >
            <img className='search-icon-img' src={SearchIcon} alt="SearchIcon" />
            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search users by id, name, address, pincode, items' />
            {
                searchValue.length ?
                    <img className='close-icon' src={CloseIcon} alt="CloseIcon" onClick={handleClose} />
                    : ""
            }
        </div>
    )
}

export default Searchbar
