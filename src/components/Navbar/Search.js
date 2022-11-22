import React from "react";
import { Icon } from "Icons";

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
        <Icon size={24} name="search" />
      </label>
      <input
      autoFocus={true}
        type="text"
        className="h-10 font-medium pl-12 outline-none text-black bg-white rounded-3xl placeholder-black/50 text-sm max-w-full w-[22.75rem]"
        placeholder="Ne dinlemek istiyorsun?"
      />
    </div>
  );
}

export default Search;
