const paymentHandler = async function (token, productID) {
  try {
    let response = await fetch(`${process.env.REACT_APP_APIURL}/payment`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ productID, token }),
    });
    let responseBody = await response.json();
    if (responseBody?.success === "Token refreshed") {
      response = await fetch(`${process.env.REACT_APP_APIURL}/payment`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ productID, token }),
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

export default paymentHandler;
