function Validation() {
    this.kiemTraRong = function(value,divId,mess){
        if (value == '') {
            getEle(divId).innerHTML = mess
            getEle(divId).style.display = 'block';
            return false;
        }
        else {
            getEle(divId).innerHTML = ''
            getEle(divId).style.display = 'none';
            return true;
        }
    }
    this.kiemTraDoDaiKiTu = function(value,divId,mess,min,max){
        if(value.trim().length >= min && value.trim().length < max){
            getEle(divId).innerHTML = ''
            getEle(divId).style.display = 'none';
            return true;
        }
            getEle(divId).innerHTML = mess
            getEle(divId).style.display = 'block';
            return false;
    }
    this.kiemTraChuoiKiTu = function(value,divId,mess){
        let letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        if(value.match(letter)){
            getEle(divId).innerHTML = ''
            getEle(divId).style.display = 'none';
            return true;
        }
            getEle(divId).innerHTML = mess
            getEle(divId).style.display = 'block';
            return false;
    }
    this.kiemTraEmail = function (value, divId, mess) {
        let letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(letter)) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraMatKhau = function (value, divId, mess) {
        let letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.match(letter)) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraNgayThang = function (value, divId, mess) {
        let letter =/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (value.match(letter)) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraLuong = function (value, divId, mess) {
        
        if (value >= 1000000 && value <= 20000000) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraChucVu = function (value, divId, mess) {
        
        if (value === 'Sếp' || value == 'Trưởng Phòng' || value === 'Nhân Viên') {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraGioLam = function (value, divId, mess) {
        
        if (value >= 80 && value <= 200) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraTrungTaiKhoan = function (value, divId, mess, arr) {
        /**
         * 0. status = false;
         * 1. Duyệt arr
         * 2. Nếu nv.maSV trùng với value
         * => cập nhật status = true
         * => break;
         * 3. Check status
         */
        let status = false;
        for (let i = 0; i < arr.length; i++) {
            let nv = arr[i];
            if (nv.taiKhoan === value) {
                status = true;
                break;
            }
        }
        if (status) {
            //hợp lệ 
            getEle(divId).innerHTML = mess;
            getEle(divId).style.display = 'block';
            return false;
        }
        // không hợp lệ

            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
    }
}