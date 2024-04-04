import './App.css';
import SearchPage from './components/SearchPage';
import { SearchPageContextProvider } from './context/SearchPageContext';

function App() {
  return (
    <SearchPageContextProvider>
      <SearchPage />
    </SearchPageContextProvider>
  );
}

export default App;
