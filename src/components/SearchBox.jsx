function SearchBox({ setSearchString }) {
  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onInput={handleSearchChange} />
    </div>
  );
}

export default SearchBox;
