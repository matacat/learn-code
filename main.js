const DIEM5 = 5;
const DIEM6 = 6;
const DIEM7 = 7;
const DIEM8 = 8;
const DIEM9 = 9;
const DIEM10 = 10;

// var dtb = 0;

function tinhDTB(a, b, c){
  var diemTB = (a + b + c) / 3;
  return diemTB;
}

function xepLoai(dtb) {
  if (dtb < DIEM5){
    console.log("Xep loai Yeu");
  }
  if (dtb < DIEM6 && dtb >= DIEM5){
    console.log("Xep loai TB");
  }
  if (dtb < DIEM7 && dtb >= DIEM6){
    console.log("Xep loai TB Kha");
  }
  if (dtb < DIEM8 && dtb >= DIEM7){
    console.log("Xep loai Kha");
  }
  if (dtb < DIEM9 && dtb >= DIEM8){
    console.log("Xep loai Gioi");
  }
  if (dtb < DIEM10 && dtb >= DIEM9){
    console.log("Xep loai Xuat Sac");
  }
}

function onClick(){
  var toan = 5;
  var ly = 6;
  var hoa = 9;
  var dtb = tinhDTB(toan, ly, hoa);
  console.log("diem tb la " + dtb);
  xepLoai(dtb);
}

onClick();



