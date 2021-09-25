import { unWrap, getErrorResponse } from "~/utils/fetchUtils";

export default function(context, inject) {
  const appiId = "0N4JCEK8C1";
  const apiKey = "74255714e60b3e650c002e6dc1793c63";

  inject("dataApi", {
    getProduct
  });
  const headers = {
    "X-Algolia-API-Key": apiKey,
    "X-Algolia-Application-Id": appiId
  };
  async function getProduct() {
    try {
      return unWrap(
        await fetch(`https://${appiId}-dsn.algolia.net/1/indexes/Products/`, {
          headers
        })
      );
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}
