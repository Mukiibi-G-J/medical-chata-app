import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { useEffect } from "react";
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async () => {
    try {
      // TODO : fetch channels
    } catch (error) {
      setQuery("");
    }
  };
  const onSearch = (event) => {
    // to avoid refreshing affer submit
    event.preventDefault();
    setLoading(true);
    // getting the input value and updating the query state
    setQuery(event.value.target.value);
    getChannels(event.value.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={onSearch}
          className="channel-search__input__text"
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
