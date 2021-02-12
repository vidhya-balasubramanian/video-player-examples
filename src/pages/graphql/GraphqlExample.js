import React from "react";
import { useQuery, gql } from "@apollo/client";

const GraphqlExample = () => {
  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        data?.rates?.map((d) => (
          <p key={d.currency}>
            {d.currency}: {d.rate}
          </p>
        ))
      )}
    </div>
  );
};

export default GraphqlExample;
