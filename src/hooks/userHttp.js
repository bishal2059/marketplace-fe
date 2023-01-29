const getUserDetails = async function () {
  try {
    let response = await fetch("http://localhost:8000/user", {
      credentials: "include",
    });
    let responseBody = response.json();
    if (response?.success === "Token refreshed") {
      response = await fetch("http://localhost:8000/user", {
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

const verifyUser = async function () {
  try {
    let response = await fetch("http://localhost:8000/verify", {
      credentials: "include",
    });
    let responseBody = response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch("http://localhost:8000/verify", {
        credentials: "include",
      });
      responseBody = response.json();
    }
    if (responseBody?.error) {
      throw new Error(response.error);
    }
    return responseBody;
  } catch (err) {
    return {
      error: err,
    };
  }
};

export { getUserDetails, verifyUser };
