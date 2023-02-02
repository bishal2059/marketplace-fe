const addToCart = async function (id) {
  const requestBody = { id: id };
  try {
    let response = await fetch(`http://localhost:8000/cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`http://localhost:8000/cart`, {
        method: "POST",
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
    let response = await fetch(`http://localhost:8000/cart/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`http://localhost:8000/cart/${id}`, {
        method: "DELETE",
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
    let response = await fetch("http://localhost:8000/cart", {
      credentials: "include",
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch("http://localhost:8000/cart", {
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
