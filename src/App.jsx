import React from "react";
import { Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import "./App.css";

// implementing better file structure
import { ChannelListContainer, ChannelContainer } from "./Components";

// api key from the stream application
const apiKey = "wwap8b5zugku";

// creating an instance of the StreamChat and pass the appikey
const client = StreamChat.getInstance(apiKey);

export const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        {/* channel list container */}
        <ChannelListContainer />

        {/* channel conatainer */}
        <ChannelContainer />
      </Chat>
    </div>
  );
};
