async function getCategories(limit, page, name, category) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_APIURL}/products/${category}?limit=${limit}&page=${page}&name=${name}`,
      {
        credentials: "include",
      }
    );
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      console.log();
      response = await fetch(
        `${process.env.REACT_APP_APIURL}/products/${category}?limit=${limit}&page=${page}&name=${name}`,
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

export default getCategories;
