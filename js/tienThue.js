function tinhThueSuat(thuNhapChiuThue) {
    if (thuNhapChiuThue <= 60000000) {
        return thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
        return thuNhapChiuThue * 0.10;
    } else if (thuNhapChiuThue <= 210000000) {
        return thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue <= 384000000) {
        return thuNhapChiuThue * 0.20;
    } else if (thuNhapChiuThue <= 624000000) {
        return thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
        return thuNhapChiuThue * 0.30;
    } else {
        return thuNhapChiuThue * 0.35;
    }
}
function tinhTienThue() {
    const hoTen = document.getElementById("nhapHoTen2").value;
    const thuNhap = document.getElementById("thuNhap").value * 1;
    const nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    const thuNhapChiuThue = thuNhap - 4000000 - (nguoiPhuThuoc * 1600000);
    if (thuNhapChiuThue > 0) {
        const tienThue = tinhThueSuat(thuNhapChiuThue);
        const formattedNumber = new Intl.NumberFormat('vi-VN').format(tienThue);
        const rs = `Họ tên: ${hoTen} | Tiền thuế thu nhập cá nhân: ${formattedNumber} VND`;
        document.getElementById("showInfo_3").innerHTML = rs;
    } else {
        alert("Thu nhập chưa đến mức phải đóng thuế!");
    }
}