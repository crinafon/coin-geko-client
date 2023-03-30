import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/table";
import { getCoinDetails } from "../services/api";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  console.log(id);

  useEffect(() => {
    getCoinDetails(id).then((res) => {
      if (res.status === 200) {
        const data = {
          logo: res.data.image.small,
          name: res.data.name,
          symbol: res.data.symbol,
          hashing: res.data.hashing_algorithm,
          description: res.data.description.en,
          marketCapEur: res.data.market_data.market_cap.eur,
          homepage: res.data.links.homepage,
          genesisDate: res.data.genesis_date,
        };
        setDetails(data);
      }
    });
  }, []);

  const tableHeader = [
    {
      title: "Hashing algorithm",
      objKey: "hashing",
    },
    {
      title: "Market Cap in Euro",
      objKey: "marketCapEur",
    },
    {
      title: "Genesis Date",
      objKey: "genesisDate",
    },
  ];

  return (
    <div className="m-3">
      <div className="d-flex mb-3">
        <img src={details.logo} alt="logo"></img>
        <h1>{details.name}</h1>
      </div>
      {/* <p dangerouslySetInnerHTML={{ __html: details.description }}></p> */}
      <iframe
        sandbox=""
        srcDoc={details.description}
        className="w-100"
        style={{ minHeight: "20rem" }}
      ></iframe>
      <Table header={tableHeader} body={[details]} />
      <ul>
        {details?.homepage?.map(
          (link, index) =>
            link !== "" && (
              <li key={link + index}>
                <a href={link}>{link}</a>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Details;
