const ok = document.querySelector(".suscess");
ok.onclick = function () {
    const user = document.getElementById("Username").value;
    const password = document.getElementById("pass").value;
    if (user == 'admin' && password == 'admin') {
        window.location.href = "admin.php"
    } else {
        alert("Sai tài khoản hoặc mật khẩu")
    }
}