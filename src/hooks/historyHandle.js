const getAllHistory = async function () {
  try {
    let response = await fetch("http://localhost:8000/history", {
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch("http://localhost:8000/history", {
        credentials: "include",
      });
      responseBody = response.json();
    }
    return responseBody;
  } catch (err) {
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
};

export { getAllHistory };
