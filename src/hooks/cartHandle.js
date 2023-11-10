const addToCart = async function (id) {
  const requestBody = { id: id };
  try {
    let response = await fetch(`${process.env.REACT_APP_APIURL}/cart`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`${process.env.REACT_APP_APIURL}/cart`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
        credentials: "include",
      });
      responseBody = await response.json();
    }
    if (responseBody?.error === "User not verified") {
      return {
        unverified: true,
        message: "Your account isn't verified",
      };
    }
    return responseBody;
  } catch (err) {
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
};

const removeFromCart = async function (id) {
  try {
    let response = await fetch(`${process.env.REACT_APP_APIURL}/cart/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`${process.env.REACT_APP_APIURL}/cart/${id}`, {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
      });
      responseBody = await response.json();
    }
    if (responseBody?.error === "User not verified") {
      return {
        unverified: true,
        message: "Your account isn't verified",
      };
    }
    return responseBody;
  } catch (err) {
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
};

const getAllCart = async function () {
  try {
    let response = await fetch(`${process.env.REACT_APP_APIURL}/cart`, {
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`${process.env.REACT_APP_APIURL}/cart`, {
        credentials: "include",
      });
      responseBody = response.json();
    }
    if (responseBody?.error === "User not verified") {
      return {
        unverified: true,
        message: "Your account isn't verified",
      };
    }
    return responseBody;
  } catch (err) {
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
};

export { addToCart, removeFromCart, getAllCart };
