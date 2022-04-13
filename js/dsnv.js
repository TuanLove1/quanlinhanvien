function DanhSachNhanVien(){
    this.arr = [];
    
    this.themNV = function(nhanVien){
        this.arr.push(nhanVien);
    }

    this.timViTriNhanVien = function(taiKhoan){
        let index = -1 ;
        for (let i = 0; i < this.arr.length; i++) {
            let nhanVien = this.arr[i];
            if(nhanVien.taiKhoan === taiKhoan) {
                index = i;
                break;
            }            
        }
        return index;
    }
    this._xoaNV = function(taiKhoan){
        let index = this.timViTriNhanVien(taiKhoan);
        if(index != -1){
            this.arr.splice(index,1);
        }
    }
    
    this.layThongTinNhanVien = function(taiKhoan){
        let index = this.timViTriNhanVien(taiKhoan);
        if(index != -1){
            let nhanVien = this.arr[index];
            return nhanVien;
        }
        return null;
    }
    
    this.capNhatNhanVien = function(nhanVien){
        let index = this.timViTriNhanVien(nhanVien.taiKhoan);
        if(index !== -1){
            //cap nhật nv
            this.arr[index] = nhanVien;
        }
    }

    this.timKiemNhanVien = function(keyword){
        let mangTimKiem = [];
        for (let i = 0; i < this.arr.length; i++) {
            let nhanVien = this.arr[i];
            if(nhanVien.xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
                mangTimKiem.push(nhanVien)
            }            
        }
        return mangTimKiem;
    }
}



