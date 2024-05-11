import { useRef } from "react";

function SearchBar({ setSearchResults }) {
  const searchInputRef = useRef(null);

  async function onSearch() {
    const searchTerm = searchInputRef.current.value;

    if (searchTerm) {
      try {
        const res = await fetch(
          `https://backend.cappsule.co.in/api/v1/new_search?q=${searchTerm}&pharmacyIds=1,2,3`
        );
        const { data } = await res.json();
        setSearchResults(data?.saltSuggestions ?? []);
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  return (
    <div className="sticky top-5">
      <div className="relative">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>

        <input
          ref={searchInputRef}
          type="text"
          id="Search"
          placeholder="Type your medicine name here..."
          className="w-full rounded-lg border-gray-500 py-4 ps-10 pe-10 shadow sm:text-sm"
        />

        <button
          type="button"
          className="text-gray-600 absolute inset-y-0 end-5 grid w-10 place-content-center hover:text-gray-700"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
