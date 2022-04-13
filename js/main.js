let dsnv = new DanhSachNhanVien();
let validation = new Validation();
function getEle(id) {
    return document.getElementById(id);
}
getEle('btnThem').onclick = function () {
    getEle('btnCapNhat').style.display = 'none';
    getEle('tknv').disabled = false;
}
getEle('btnThemNV').onclick = function () {
    let nhanVien = layThongTinNhanVien();
    if(nhanVien){
        nhanVien.xepLoai();
        dsnv.themNV(nhanVien);
        taoBang(dsnv.arr);
        setLocal();
        // console.log(dsnv.arr);
    }
    // console.log(nhanVien);
}
function layThongTinNhanVien() {
    let _taiKhoan = getEle('tknv').value;
    let _fullName = getEle('name').value;
    let _email = getEle('email').value;
    let _matKhau = getEle('password').value;
    let _ngayLam = getEle('datepicker').value;
    let _luongCoBan = getEle('luongCB').value;
    let _chucVu = getEle('chucvu').value;
    // console.log(_chucVu);
    let _gioLam = getEle('gioLam').value;

    //check validation
    let isValid = true;
    // if (_taiKhoan == '') {
    //     getEle('tbTKNV').innerHTML = '(*)Vui lòng nhập tài khoản'
    //     getEle('tbTKNV').style.display = 'block';
    //     isValid = false;
    // }
    // else {
    //     getEle('tbTKNV').innerHTML = ''
    //     getEle('tbTKNV').style.display = 'none';
    //     isValid = true;
    // }// 
    isValid &= validation.kiemTraRong(_taiKhoan,'tbTKNV','(*)Vui lòng nhập tài khoản') && validation.kiemTraDoDaiKiTu(_taiKhoan,'tbTKNV','(*)Vui lòng nhập 4-6 số',4,6)&& validation.kiemTraTrungTaiKhoan(_taiKhoan,'tbTKNV','(*)Tài khoản đã tồn tại',dsnv.arr);
    isValid &= validation.kiemTraRong(_fullName,'tbTen','(*)Vui lòng nhập tên')&& validation.kiemTraChuoiKiTu(_fullName,'tbTen','(*)Vui lòng nhập kí tự');
    isValid &= validation.kiemTraRong(_email,'tbEmail','(*)Vui lòng nhập email')&& validation.kiemTraEmail(_email,'tbEmail','(*)Vui lòng nhập đúng định dạng email');
    isValid &= validation.kiemTraRong(_matKhau,'tbMatKhau','(*)Vui lòng nhập mật khẩu')&& validation.kiemTraMatKhau(_matKhau,'tbMatKhau','(*)Vui lòng nhập mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt),');
    isValid &= validation.kiemTraRong(_ngayLam,'tbNgay','(*)Vui lòng nhập ngày tháng')&& validation.kiemTraNgayThang(_ngayLam,'tbNgay','(*)Vui lòng nhập ngày tháng dưới định dạng mm/dd/yyyy');
    isValid &= validation.kiemTraRong(_luongCoBan,'tbLuongCB','(*)Vui lòng nhập lương')&& validation.kiemTraLuong(_luongCoBan,'tbLuongCB','(*)Vui lòng nhập Lương cơ bản 1 000 000 - 20 000 000');
    isValid &= validation.kiemTraChucVu(_chucVu,'tbChucVu','(*)Vui lòng chọn chức vụ hợp lệ');
    isValid &= validation.kiemTraRong(_gioLam,'tbGiolam','(*)Vui lòng nhập giờ làm')&& validation.kiemTraGioLam(_gioLam,'tbGiolam','(*)Vui lòng nhập giờ làm từ 80 - 200 (giờ)');

    if (isValid) {
        let nhanVien = new NhanVien(_taiKhoan, _fullName, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam);
        nhanVien.tinhTongLuong(_chucVu);
        return nhanVien;
    }
    return null;
}
taoBang = (arr) => {
    let content = '';
    for (let i = 0; i < arr.length; i++) {
        let nv = arr[i];
        content += ` 
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.fullName}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td><button class='btn btn-danger' onclick ='xoaNV("${nv.taiKhoan}")'>Xóa</button></td>
                <td><button class='btn btn-danger' data-toggle="modal"
                data-target="#myModal" onclick ='suaNV("${nv.taiKhoan}")'>Sửa</button></td>
                   
            </tr>
        `
    }
    getEle('tableDanhSach').innerHTML = content;
}

xoaNV = (taiKhoan) => {
    dsnv._xoaNV(taiKhoan);
    //cập nhật lại
    taoBang(dsnv.arr);
    setLocal();
    // console.log(maSV);
}

//sửa
suaNV = (taiKhoan) => {
    let nhanVien = dsnv.layThongTinNhanVien(taiKhoan);
    getEle('tknv').value = nhanVien.taiKhoan;
    getEle('tknv').disabled = true;
    getEle('name').value = nhanVien.fullName;
    getEle('email').value = nhanVien.email;
    getEle('password').value = nhanVien.matKhau;
    getEle('datepicker').value = nhanVien.ngayLam;
    getEle('luongCB').value = nhanVien.luongCoBan;
    getEle('chucvu').value = nhanVien.chucVu;
    getEle('gioLam').value = nhanVien.gioLam;
    getEle('btnCapNhat').style.display = 'block';

}

getEle('btnCapNhat').onclick = function () {
    let nhanVien = layThongTinNhanVien();
    if(nhanVien){
        nhanVien.xepLoai();

        dsnv.capNhatNhanVien(nhanVien);

        taoBang(dsnv.arr);
        setLocal();
    }
}

getEle('searchName').addEventListener('keyup', function () {
    let keyword = getEle('searchName').value;
    let mangTimKiem = dsnv.timKiemNhanVien(keyword);
    console.log(mangTimKiem);
    taoBang(mangTimKiem);
});

setLocal = () => {
    let dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem('DSNV', dataString);
}

getLocal = () => {
    let dataString = localStorage.getItem('DSNV') || [];
    // console.log(dataString);
    let dataJSON = JSON.parse(dataString);
    dsnv.arr = dataJSON;
    taoBang(dsnv.arr);
}

getLocal();