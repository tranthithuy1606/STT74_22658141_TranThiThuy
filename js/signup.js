// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// Hàm kiểm tra username hợp lệ (không chứa số hoặc ký tự đặc biệt)
function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z\s]+$/; // Chỉ cho phép chữ cái và khoảng trắng
    return usernameRegex.test(username);
}

// Hàm kiểm tra mật khẩu mạnh
function isStrongPassword(password) {
    if (password.length < 12) return false;
    if (password[0] !== password[0].toUpperCase() || !/[A-Z]/.test(password[0])) return false;
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacters.test(password)) return false;
    return true;
}

// Gắn sự kiện vào nút đăng ký
btnRegister.addEventListener("click", (e) => {
    e.preventDefault();

    const username = inputUsernameRegister.value.trim();
    const password = inputPasswordRegister.value.trim();

    if (username === "" || password === "") {
        alert("Vui lòng không để trống");
    } else if (!isValidUsername(username)) {
        alert("Tên người dùng không được chứa số hoặc ký tự đặc biệt. Vui lòng nhập lại.");
        return;
    } else if (!isStrongPassword(password)) {
        alert("Mật khẩu phải có ít nhất 12 ký tự, ký tự đầu là chữ viết hoa, và có ít nhất một ký tự đặc biệt.");
        return;
    } else {
        const user = { username, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert(`Đăng ký thành công! \nUsername: ${user.username}\nPassword: ${user.password}`);
        window.location.href = "login.html";
    }
});
