// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// Hàm kiểm tra username hợp lệ (không chứa số hoặc ký tự đặc biệt)
function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z\s]+$/; // Chỉ chứa chữ cái và khoảng trắng
    return usernameRegex.test(username); // Trả về true nếu username hợp lệ
}

// Hàm kiểm tra mật khẩu mạnh
function isStrongPassword(password) {
    // Kiểm tra độ dài
    if (password.length < 12) {
        return false;
    }

    // Kiểm tra ký tự đầu tiên phải là chữ viết hoa
    if (password[0] !== password[0].toUpperCase() || !/[A-Z]/.test(password[0])) {
        return false;
    }

    // Kiểm tra có ít nhất một ký tự đặc biệt
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacters.test(password)) {
        return false;
    }

    return true;
}

// Gắn sự kiện vào nút đăng ký
btnRegister.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn hành vi mặc định của form

    const username = inputUsernameRegister.value.trim(); // Lấy giá trị username
    const password = inputPasswordRegister.value.trim(); // Lấy giá trị password

    // Kiểm tra điều kiện username
    if (!isValidUsername(username)) {
        alert("Tên người dùng không hợp lệ. Vui lòng chỉ nhập chữ cái và khoảng trắng.");
        return;
    }

    // Kiểm tra điều kiện mật khẩu
    if (!isStrongPassword(password)) {
        alert("Mật khẩu phải có ít nhất 12 ký tự, bắt đầu bằng chữ viết hoa và chứa ít nhất một ký tự đặc biệt.");
        return;
    }

    // Nếu tất cả điều kiện hợp lệ, lưu thông tin vào localStorage
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    // Hiển thị thông báo thành công và chuyển hướng sang trang đăng nhập
    alert(`Đăng ký thành công! \nUsername: ${user.username}\nPassword: ${user.password}`);
    window.location.href = "login.html";
});
