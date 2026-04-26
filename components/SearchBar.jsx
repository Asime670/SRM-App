/**
 * SearchBar component for filtering student list
 * @param {Object} props - { searchTerm, onSearchChange }
 */
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search students by name..."
        className="input-field max-w-md"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
