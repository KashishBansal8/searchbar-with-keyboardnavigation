import { useEffect, useState } from 'react'
import { MOCK_SEARCH_DATA } from './Constant';

const useMockSearchData = () => {
    const [mockData, setMockData] = useState([]);

    const fetchMockData = async () => {
        let data = await fetch(MOCK_SEARCH_DATA);
        let jsonData = await data.json();
        setMockData(jsonData);
    }

    useEffect(() => {
        fetchMockData();
    }, []);

    return mockData;
}

export default useMockSearchData
