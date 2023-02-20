function ktra() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    var rp = document.getElementById("repeat-pass").value;

    if(u == "") {
        alert("Vui lòng nhập họ tên !");
        return false;
    }

    if(p == "") {
        alert("Vui lòng nhập mật khẩu !");
        return false;
    }

    if(rp == "") {
        alert("Vui lòng xác nhận mật khẩu lần nữa !");
        return false;
    }

    if(p != rp) {
        alert("Mật khẩu chưa khớp !");
        return false;
    }

    alert("Cảm ơn. Bạn đã đăng ký thành công !")
    return true;
}