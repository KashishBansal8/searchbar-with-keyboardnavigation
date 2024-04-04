import React, { useState, useContext } from "react";

export const SearchPageContext = React.createContext();

export const useSearchPageContext = () => {
    return useContext(SearchPageContext);
}

export const SearchPageContextProvider = ({ children }) => {
    const [searchedData, setSearchedData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);
    const [matchedSearchVal, setMatchedSearchVal] = useState("");

    return (
        <SearchPageContext.Provider value={{
            searchedData,
            setSearchedData,
            selectedItem,
            setSelectedItem,
            matchedSearchVal,
            setMatchedSearchVal
        }}>
            {children}
        </SearchPageContext.Provider>
    )
}