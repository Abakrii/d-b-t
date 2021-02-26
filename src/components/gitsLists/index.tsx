import { Gist } from "../";

const GistLists = ({ gists }: any) => {
  return gists.map((gist: any) => {
    const { id } = gist;
    return <Gist key={id} gist={gist} />;
  });
};

export default GistLists;
