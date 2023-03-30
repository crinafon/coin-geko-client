import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: { Accept: "application/json" },
});

const getCoinsMarket = (pageQty = 10, pageNo = 1) => {
  return api.get(
    `/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${pageQty}&page=${pageNo}&sparkline=false`
  );
};

const getCoinDetails = (id) => {
  return api.get(`/coins/${id}`);
};

export { getCoinsMarket, getCoinDetails };
