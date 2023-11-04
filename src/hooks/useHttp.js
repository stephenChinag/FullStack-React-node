import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong fail to send req "
    );
  }
  return resData;
}

export default function useHttp() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function sendRequenst() {
    setIsLoading(true);
    try {
      const resData = sendHttpRequest();
    } catch (error) {
      setError(error.message || "something Went Wrong");
    }
    setIsLoading(false);
  }
}
