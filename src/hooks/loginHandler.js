async function loginHandler(userData) {
  try {
    const result = await fetch(`http://localhost:8000/login`, {
      method: "POST",
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
