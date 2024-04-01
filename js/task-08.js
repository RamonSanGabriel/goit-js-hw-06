const form = document.querySelector("form.login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("[name=email]").value;
  const password = document.querySelector("[name=password]").value;
  console.log(email, password);
  const user = {
    email: "ramon123@yahoo.com",
    password: "pass123",
  };
  if (email === user.email && password === user.password) {
    alert("Login Successful!");
  } else if (email === "" || password === "") {
    alert("All fields must be filled in.");
  } else {
    alert("Invalid Credentials");
  }
  form.reset();
});
