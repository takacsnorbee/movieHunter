import './SearchField.css';

const SearchField = ({ handleSearchField, className }) => {
  return <input className={className} onChange={handleSearchField} />;
};

export default SearchField;
