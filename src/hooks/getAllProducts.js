async function getAllProducts(limit, page, name) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_APIURL}/products?limit=${limit}&page=${page}&name=${name}`,
      {
        mode: "cors",
        credentials: "include",
      }
    );
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(
        `${process.env.REACT_APP_APIURL}/products?limit=${limit}&page=${page}&name=${name}`,
        {
          mode: "cors",
          credentials: "include",
        }
      );
      responseBody = await response.json();
    }
    return responseBody;
  } catch (err) {
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
}

export default getAllProducts;
