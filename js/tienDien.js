const kw_1 = 500;
const kw_2 = 650;
const kw_3 = 850;
const kw_4 = 1100;
const kw_5 = 1300;
let total = 0;
function clacDetail(soKw, price1, price2, price3, price4, price5) {
    if (0 <= soKw && soKw <= 50) {
        total = soKw * price1;
    }
    else if (50 < soKw && soKw <= 100) {
        total = (50 * price1) + ((soKw - 50) * price2);
    }
    else if (100 < soKw && soKw <= 200) {
        total = (50 * price1) + (50 * price2) + ((soKw - 100) * price3);
    }
    else if (200 < soKw && soKw <= 350) {
        total = (50 * price1) + (50 * price2) + (100 * price3) + ((soKw - 200) * price4);
    }
    else if (soKw > 350) {
        total = (50 * price1) + (50 * price2) + (100 * price3) + (150 * price4) + ((soKw - 350) * price5);
    }
    else {
        alert("Nhập số kw từ 0 trở lên");
        total = 0;
    }
}
function tinhTienDien() {
    const hoTen = document.getElementById("nhapHoTen1").value;
    const soKw = document.getElementById("nhapSokw").value * 1;
    clacDetail(soKw, kw_1, kw_2, kw_3, kw_4, kw_5);
    const rs = `Họ tên: ${hoTen} | Tiền thuế thu nhập cá nhân: ${formattedNumber} VND`;
    document.getElementById("showInfo_2").innerHTML = rs;
}