import { useState } from "react";
import { Input, message } from "antd";
import { useTranslation } from "react-i18next";
const baseKey = "common";
const { Search } = Input;
const SearchingBar = ({ onSearch }: any) => {
  const { t } = useTranslation();
  const [results, setResults] = useState([]);

  async function getGists(username: any) {
    if (username.length === 0) {
      return message.error(t(`${baseKey}.plsEnter`), 1);
    }
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/gists`
      );
      let gists = [];
      if (response.status === 200) gists = await response.json();
      if (gists.length === 0) message.warn(t(`${baseKey}.noGists`), 1);
      setResults(gists);
      return onSearch(gists);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div
      className="App-header"
      style={{ height: results.length === 0 ? "100vh" : "" }}
    >
      <Search
        placeholder={t(`${baseKey}.plsType`)}
        onSearch={(name) => getGists(name)}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default SearchingBar;
