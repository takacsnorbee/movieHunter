import './SearchField.css';

const SearchField = ({ handleSearchField, className, handleEnterKey }) => {
  return (
    <input
      className={className}
      onChange={handleSearchField}
      onKeyDown={handleEnterKey}
    />
  );
};

export default SearchField;
