import { useState } from "react";
import { SearchingBar, GistLists } from "../../components";
import "antd/dist/antd.css";
const Main = () => {
  const [gists, setGists] = useState([]);
  const onSearch = (gistLists: []) => {
    setGists(gistLists);
  };

  return (
    <div className="App">
      <SearchingBar onSearch={onSearch} />
      <GistLists gists={gists} />
    </div>
  );
};

export default Main;
