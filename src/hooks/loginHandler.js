async function loginHandler(userData) {
  try {
    const result = await fetch(`${process.env.REACT_APP_APIURL}/login`, {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await result.json();
  } catch (err) {
    console.log(err);
    return {
      clientError: "An Error occured. Please try again!",
    };
  }
}

export default loginHandler;
