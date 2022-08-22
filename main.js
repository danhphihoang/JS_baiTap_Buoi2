// BÀI 1: Tính tiền lương

var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function(){
    //Đầu vào: Lấy thông tin User nhập
    const LUONG_NGAY = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value *1;
    //Xử lý
    var tongLuong = LUONG_NGAY * soNgayLam;
    //Format VND
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<p class ='alert alert-warning'>Tổng lương bạn nhận là: " + currentFormat.format(tongLuong) + " VNĐ" + "</p>";
    //Đầu ra
    document.getElementById("xuatLuong").innerHTML = ketQua;
}

//BÀI 2: TÍNH TRUNG BÌNH 5 SỐ NHẬP VÀO

document.getElementById("btnTB").onclick = function(){
    var soT1 = document.getElementById("soT1").value * 1;
    var soT2 = document.getElementById("soT2").value * 1;
    var soT3 = document.getElementById("soT3").value * 1;
    var soT4 = document.getElementById("soT4").value * 1;
    var soT5 = document.getElementById("soT5").value * 1;

    // Xử lí:
    var tinhTB = (soT1 + soT2 + soT3 + soT4 + soT5) / 5;

    var ketQua = "<p>Tổng trung bình 5 số bạn vừa nhập vào là:<br> " + tinhTB +"</p>";
    document.getElementById("xuatTB").innerHTML = ketQua;
}

// BÀI 3: QUY ĐỔI TIỀN TỆ

document.getElementById("btnVND").onclick = function(){
    const TI_GIA = 23500;
    var tienUSD = document.getElementById("tienVND").value * 1;

    var quyDoi = TI_GIA * tienUSD;
    var currentFormat = new Intl.NumberFormat("VN-vn");

    var ketQua = "<p>Số tiền sau khi quy đổi được là:<br>" + currentFormat.format(quyDoi)+" VNĐ" +"</p>";
    document.getElementById("xuatVND").innerHTML = ketQua;
}

//BÀI 4: TÍNH DIỆN TÍCH VÀ CHU VI HÌNH CHỮ NHẬT

document.getElementById("btnCN").onclick = function(){
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    // Tính toán xử lí

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

     var ketQua = "<p>Chu vi hình chữ nhật là: <br>" + chuVi + "</p>";
         ketQua += "<p>Diện tích hình chữ nhật là:<br> " + dienTich + "</p>";
         document.getElementById("xuatCN").innerHTML = ketQua;

}

//BÀI 5: TÍNH TỔNG 2 KÝ SỐ

document.getElementById("btnKS").onclick = function(){
    var inputNumber = document.getElementById("inputNumber").value * 1;

    // Tính toán xử lí

    var soHangDV = inputNumber % 10;
    var soHangChuc = Math.floor(inputNumber / 10);
    var tongKS = soHangDV + soHangChuc;
    

     var ketQua = "<p>Tổng 2 kí số vừa nhập là: " + tongKS + "</p>";
         document.getElementById("xuatKS").innerHTML = ketQua;

}