import './SearchField.css';

const SearchField = ({ handleSearchField, className, handleEnterKey }) => {
  return (
    <input
      data-testid='searchInput'
      className={className}
      onChange={handleSearchField}
      onKeyDown={handleEnterKey}
    />
  );
};

export default SearchField;
