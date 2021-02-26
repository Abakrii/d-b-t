import { useEffect, useState } from "react";
import { Card } from "antd";
import { FileTypes, ForkersList } from "..";

const Gist = ({ gist }: any) => {
  const { description, forks_url } = gist;
  const [forkers, setForkers] = useState([]);

  useEffect(() => {
    const getForks = async () => {
      const response = await fetch(forks_url);
      let forkers = (await response.json()) || [];
      forkers.sort((a: any, b: any) => {
        return (
          new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
        );
      });
      setForkers(forkers.slice(0, 3));
    };
    getForks();
  }, []);

  return (
    <div className="gist-main">
      <Card title={description} style={{ width: 500 }}>
        <div className="gist-info">
          <FileTypes gist={gist} />
          <ForkersList forkers={forkers} />
        </div>
      </Card>
    </div>
  );
};

export default Gist;
