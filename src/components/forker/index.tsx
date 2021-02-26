import React from "react";
import { Avatar } from "antd";

const Forker = ({ forker }: any) => {
  const { owner } = forker;
  const { avatar_url, login } = owner;
  return (
    <div className="fork-avatar">
      <Avatar src={avatar_url} />
      <span>{login}</span>
    </div>
  );
};

export default Forker;
