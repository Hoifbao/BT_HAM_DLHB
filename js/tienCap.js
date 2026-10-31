const hoaDon1 = 4.5;
const hoaDon2 = 15;
const kenhCaoCap1 = 7.5;

const dichVu1 = 20.5;
const dichVu2 = 75;
const kenhCaoCap2 = 50;

function hienThiKetNoi() {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const oNhapKetNoi = document.getElementById("soKetNoi");

    if (loaiKhachHang === "doanhNghiep") {
        oNhapKetNoi.style.display = "block";
    } else {
        oNhapKetNoi.style.display = "none";
    }
}
function tinhTienCap() {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const maKhachHang = document.getElementById("maKhachHang").value;
    const soKenh = document.getElementById("soKenh").value * 1;
    const soKetNoi = document.getElementById("soKetNoi").value * 1;
    let tongTien = 0;

    if (loaiKhachHang === "nhaDan") {
        tongTien = hoaDon1 + dichVu1 + (soKenh * kenhCaoCap1);
    } else if (loaiKhachHang === "doanhNghiep") {
        let phiCoBan = dichVu2;
        if (soKetNoi > 10) {
            phiCoBan += (soKetNoi - 10) * 5;
        }
        tongTien = hoaDon2 + phiCoBan + (soKenh * kenhCaoCap2);
    } else {
        alert("Vui lòng chọn loại khách hàng!");
        return;
    }
    const rs = `Mã khách hàng: ${maKhachHang} | Tiền cáp: $${tongTien.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("showInfo_4").innerHTML = rs;
}