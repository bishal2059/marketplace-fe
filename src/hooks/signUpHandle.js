const URL = `${process.env.REACT_APP_APIURL}`;
async function signUpHandler(userData) {
  try {
    const result = await fetch(`${URL}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await result.json();
  } catch (err) {
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
}

export default signUpHandler;
