// Kiểm tra username hợp lệ (không chứa số và ký tự đặc biệt)
function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z\s]+$/; // Chỉ chứa chữ cái và khoảng trắng
    return usernameRegex.test(username);
}

// Kiểm tra email hợp lệ (@gmail.com)
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Email đuôi @gmail.com
    return emailRegex.test(email);
}

// Kiểm tra mật khẩu mạnh
function isStrongPassword(password) {
    if (password.length < 12) return false; // Đủ 12 ký tự
    if (password[0] !== password[0].toUpperCase()) return false; // Ký tự đầu viết hoa
    return true;
}

// Xử lý form đăng ký
$("#registerForm").on("submit", function (e) {
    e.preventDefault();

    const username = $("#username").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();

    // Kiểm tra điều kiện
    if (!isValidUsername(username)) {
        alert("Tên người dùng không được chứa số hoặc ký tự đặc biệt.");
        return;
    }
    if (!isValidEmail(email)) {
        alert("Email phải có đuôi @gmail.com.");
        return;
    }
    if (!isStrongPassword(password)) {
        alert("Mật khẩu phải có ít nhất 12 ký tự và bắt đầu bằng chữ viết hoa.");
        return;
    }

    // Lưu thông tin người dùng vào LocalStorage
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Đăng ký thành công!");
    window.location.href = "login.html"; // Chuyển hướng sang trang đăng nhập
});

// Xử lý form đăng nhập
$("#loginForm").on("submit", function (e) {
    e.preventDefault();

    const loginUsername = $("#loginUsername").val().trim();
    const loginPassword = $("#loginPassword").val();

    // Lấy thông tin người dùng từ LocalStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Tài khoản không tồn tại. Vui lòng đăng ký.");
        return;
    }

    // Kiểm tra thông tin đăng nhập
    if (user.username === loginUsername && user.password === loginPassword) {
        alert("Đăng nhập thành công!");
        // Chuyển đến trang chính (nếu có)
        window.location.href = "dashboard.html"; // Tùy chỉnh đường dẫn
    } else {
        alert("Username hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
});

