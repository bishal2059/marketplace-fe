const addToFavourite = async function (id) {
  const requestBody = { id: id };
  try {
    let response = await fetch(`${process.env.REACT_APP_APIURL}/favourites`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`${process.env.REACT_APP_APIURL}/favourites`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
        credentials: "include",
      });
      responseBody = await response.json();
    }
    return responseBody;
  } catch (err) {
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
};

const removeFromFavourite = async function (id) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_APIURL}/favourites/${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(
        `${process.env.REACT_APP_APIURL}/favourites/${id}`,
        {
          method: "DELETE",
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
};

const getAllFavourite = async function () {
  try {
    let response = await fetch(`${process.env.REACT_APP_APIURL}/favourites`, {
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`${process.env.REACT_APP_APIURL}/favourites`, {
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

export { addToFavourite, removeFromFavourite, getAllFavourite };
