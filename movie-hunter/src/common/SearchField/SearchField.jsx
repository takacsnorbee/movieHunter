import './SearchField.css';

const SearchField = ({ handleSearchField }) => {
  return <input onChange={handleSearchField} />;
};

export default SearchField;
