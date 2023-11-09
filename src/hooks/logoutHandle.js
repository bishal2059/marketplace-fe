const logoutHandle = async function () {
  try {
    let response = await fetch(`${process.env.REACT_APP_APIURL}/logout`, {
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`${process.env.REACT_APP_APIURL}/logout`, {
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

export { logoutHandle };
