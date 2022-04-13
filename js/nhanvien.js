function NhanVien(_taiKhoan,_fullName,_email,_matKhau,_ngayLam,_luongCoBan,_chucVu,_gioLam){
    this.taiKhoan = _taiKhoan;
    this.fullName = _fullName;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.luongCoBan = _luongCoBan;
    this.xepLoai = '';


    this.tinhTongLuong = function (chucVu) {
        if(chucVu == 'Sếp'){
            this.tongLuong = parseFloat(this.luongCoBan)*3;
        }
        if(chucVu == 'Trưởng Phòng'){
            this.tongLuong = parseFloat(this.luongCoBan)*2;
        }
        if(chucVu == 'Nhân Viên'){
            this.tongLuong = parseFloat(this.luongCoBan)*1;
        }
    }
    
    this.xepLoai = function (){
        if(this.gioLam >= 192){
            this.xepLoai = 'Nhân viên xuất sắc';
        }
        if(this.gioLam >= 176 && this.gioLam < 192){
            this.xepLoai = 'Nhân viên giỏi';
        }
        if(this.gioLam >= 160 && this.gioLam < 176){
            this.xepLoai = 'Nhân viên khá';
        }
        if(this.gioLam < 160 ){
            this.xepLoai = 'Nhân viên trung bình';
        }
        return this.xepLoai;
    }
}