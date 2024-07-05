export function SearchBar() {
  return (
    <div className="px-6 pt-8 pb-2 table-head-color border-radius">
      <input
        className="search-bar-input w-full pl-1"
        type="text"
        placeholder="Search name, email or action..."
      />
    </div>
  );
}
