const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  const username = inputUsernameRegister.value;
  const password = inputPasswordRegister.value;

  if (username === "" || password === "") {
    alert("Vui lòng không để trống");
  } else {
    // Kiểm tra xem tên đăng nhập đã tồn tại chưa
    if (isUsernameExists(username)) {
      alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
    } else {
      const user = {
        username: username,
        password: password,
      };
      const json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert("Đăng Ký Thành Công");
      window.location.href = "login.html";
    }
  }
});

// Hàm kiểm tra xem tên đăng nhập đã tồn tại trong localStorage chưa
function isUsernameExists(username) {
  return localStorage.getItem(username) !== null;
}

