import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharDetail from "../components/CharDetail";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const getCharDetail = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setDetail(json.data.results);
  };
  useEffect(() => {
    getCharDetail();
  }, []);
  return (
    <div>
      {detail.map((detail) => (
        <CharDetail
          name={detail.name}
          thumbnail={detail.thumbnail}
          modified={detail.modified}
        />
      ))}
    </div>
  );
}

export default Detail;
