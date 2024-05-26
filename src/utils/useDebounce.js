import { useEffect, useState } from "react";

const useDebounce = (searchedVal, delay = 1000) => {
    const [debouncedStr, setDebouncedStr] = useState("");

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedStr(searchedVal);
        }, delay);

        return () => clearTimeout(timer);
    }, [searchedVal, delay]);

    return debouncedStr;
}

export default useDebounce;