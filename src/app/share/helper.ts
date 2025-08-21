import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class convertHelper {
    defaultNumbers: any = '';

    chuHangDonVi: any = '';
    chuHangChuc: any = '';
    chuHangTram: any = '';
    dvBlock: any = '';

    constructor() {
        this.defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';

        this.chuHangDonVi = ('1 một' + this.defaultNumbers).split(' ');
        this.chuHangChuc = ('lẻ mười' + this.defaultNumbers).split(' ');
        this.chuHangTram = ('không một' + this.defaultNumbers).split(' ');
        this.dvBlock = '1 nghìn triệu tỷ'.split(' ');
        
    }

    to_vietnamese(number) {
        var str = parseInt(number) + '';
        var i = 0;
        var arr = [];
        var index = str.length;
        var result = [];
        var rsString = '';

        if (index == 0 || str == 'NaN') {
            return '';
        }

        // Chia chuỗi số thành một mảng từng khối có 3 chữ số
        while (index >= 0) {
            arr.push(str.substring(index, Math.max(index - 3, 0)));
            index -= 3;
        }

        // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam
        for (i = arr.length - 1; i >= 0; i--) {
            if (arr[i] != '' && arr[i] != '000') {
                result.push(this.convert_block_three(arr[i]));

                // Thêm đuôi của mỗi khối
                if (this.dvBlock[i]) {
                    result.push(this.dvBlock[i]);
                }
            }
        }

        // Join mảng kết quả lại thành chuỗi string
        rsString = result.join(' ');

        // Trả về kết quả kèm xóa những ký tự thừa
        return rsString.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
    }

    convert_block_three(number) {
        if (number == '000') return '';
        var _a = number + ''; //Convert biến 'number' thành kiểu string

        //Kiểm tra độ dài của khối
        switch (_a.length) {
            case 0: return '';
            case 1: return this.chuHangDonVi[_a];
            case 2: return this.convert_block_two(_a);
            case 3:
                var chuc_dv = '';
                if (_a.slice(1, 3) != '00') {
                    chuc_dv = this.convert_block_two(_a.slice(1, 3));
                }
                var tram = this.chuHangTram[_a[0]] + ' trăm';
                return tram + ' ' + chuc_dv;
        }
    }
    convert_block_two(number) {
        var dv = this.chuHangDonVi[number[1]];
        var chuc = this.chuHangChuc[number[0]];
        var append = '';

        // Nếu chữ số hàng đơn vị là 5
        if (number[0] > 0 && number[1] == 5) {
            dv = 'lăm'
        }

        // Nếu số hàng chục lớn hơn 1
        if (number[0] > 1) {
            append = ' mươi';

            if (number[1] == 1) {
                dv = ' mốt';
            }
        }

        return chuc + '' + append + ' ' + dv;
    }

    env(){
        return `https://${localStorage.getItem('unit')}.tvsgpp.net/api/`;
    }

    env2(){
        return `https://tvsgpp.net/api/`;
    }


    typeProduct(){
        // return ['Thuốc','Vật tư y tế','Thực phẩm chức năng'];
        return [
            {
                'item': 'Thuốc',
                'value': 'THUOC'
            },
            {
                'item': 'Vật tư y tế',
                'value': 'VTYT'
            },
            {
                'item': 'Thực phẩm chức năng',
                'value': 'TPCN'
            },
        ];

    }

    typeChungTu(LoaiCTID){
        var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
        for (let i = 0; i < typeArr.length; i++) {
            if(typeArr[i].LoaiCTID == LoaiCTID){
                return typeArr[i].DienGiai;
            }            
        }
    }

    typeChungTuObj(LoaiCTID){
        var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
        for (let i = 0; i < typeArr.length; i++) {
            if(typeArr[i].LoaiCTID == LoaiCTID){
                return typeArr[i];
            }            
        }
    }

    convertFileToBase64(file: File): Promise<string> {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
        });
      }
}
