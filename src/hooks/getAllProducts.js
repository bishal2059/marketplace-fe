async function getAllProducts(limit, page, name) {
  try {
    let response = await fetch(
      `http://localhost:8000/products?limit=${limit}&page=${page}&name=${name}`,
      {
        credentials: "include",
      }
    );
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      console.log();
      response = await fetch(
        `http://localhost:8000/products?limit=${limit}&page=${page}&name=${name}`,
        {
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
