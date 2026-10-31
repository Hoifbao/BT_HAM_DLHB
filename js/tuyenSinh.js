const khuVucA = 2;
const khuVucB = 1;
const khuVucC = 0.5;

const doiTuong1 = 2.5;
const doiTuong2 = 1.5;
const doiTuong3 = 1;

function tinhDiemKhuVuc(khuVuc) {
    if (khuVuc === "A") {
        return khuVucA;
    }
    if (khuVuc === "B") {
        return khuVucB;
    }
    if (khuVuc === "C") {
        return khuVucC;
    }
    return 0;
}
function tinhDiemDoiTuong(doiTuong) {
    if (doiTuong === "1") {
        return doiTuong1;
    }
    if (doiTuong === "2") {
        return doiTuong2;
    }
    if (doiTuong === "3") {
        return doiTuong3;
    }
    return 0;
}
function tinhDiem() {
    const diemChuan = document.getElementById("n_diemChuan").value * 1;
    const diem1 = document.getElementById("n_diem1").value * 1;
    const diem2 = document.getElementById("n_diem2").value * 1;
    const diem3 = document.getElementById("n_diem3").value * 1;
    const khuVuc = document.getElementById("area").value;
    const doiTuong = document.getElementById("doiTuong").value;

    const diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    const diemDoiTuong = tinhDiemDoiTuong(doiTuong);
    const tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    let ketQua = "";
    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        ketQua = "Bạn đã rớt. Do có môn bị điểm liệt (0 điểm).";
    }
    else if (tongDiem >= diemChuan) {
        ketQua = "Bạn đã đậu. Tổng điểm: " + tongDiem;
    }
    else {
        ketQua = "Bạn đã rớt. Tổng điểm: " + tongDiem;
    }
    document.getElementById("showInfo_1").innerHTML = ketQua;
};