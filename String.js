// Xu ly string trong JS nhu xu ly 1 object, vi String co cac thuoc tinh nhu (length, prototype)
// length -> tra ve do dai cua chuoi
// Object.propotype.name -> Them thuoc tinh hay phuong thuc
let ex1 = () => {
  let a = "Java";
  console.log(a.length); // 4
  String.prototype.add_last = function (char) {
    // Khong duoc dung arrow function voi prototype, this,...
    return this + char;
  };
  String.prototype.check_length = function () {
    if (this.length < 10) console.log("The length string is less than 10");
    else console.log("The lenght string is longer than 10");
  };
  let anew = a.add_last("script");
  console.log(anew); // Javascript
  anew.check_length();
};
ex1();

let ex2 = () => {
  let a = "dannguyen",
    b = "DANNGUYEN";
  // *** concat() -> noi 2 chuoi
  a = a.concat(b);
  console.log(a); // dannguyenDANNGUYEN

  // *** charAt() -> tra ve gia tri cua phan tu tai chi so dua vao, charCodeAt() -> tra ve gia tri thuoc bang Unicode
  console.log(a.charAt(2)); // n
  console.log(a.charCodeAt(2)); // 110

  // *** indexOf(value, startIndex) -> tra ve vi tri dau tien cua chuoi can tim, lastIndexOf(value, startIndex) -> tra ve vi tri cuoi cung cua chuoi can tim, neu khong tum thay -> -1
  let i1 = a.indexOf("an");
  console.log(i1); // 1 (do bat dau tim thay chu 'a' o vi tri thu 1)
  let i2 = a.lastIndexOf("n");
  console.log(i2); // 8

  // *** search(RegExp) -> tra ve vi tri dau tien tim kiem duoc, neu khong -> -1
  console.log(a.search("nn")); //2

  // *** match(RegExp) -> tra ve mang cac gia tri tim kiem duoc (/Regexp/g), tra ve mot object gia tri duoc tim thay dau tien trong mang(/RegExp/i), tra ve ca gia tri in hoa va thuong (/RegExp/gi), neu khong -> null
  console.log(a.match(/n/gi)); // [ 'n', 'n', 'n', 'N', 'N', 'N' ]

  // *** repalce(RegExp) -> thay the tat ca chuoi nhat dinh (bieu thuc chinh quy) bang 1 chuoi moi
  let r1 = a.replace(/dan/gi, "Dan");
  console.log(r1); // DannguyenDanNGUYEN

  // *** substring(start, end) -> cat 1 chuoi bat dau tu vi tri start den vi tri (end-1)
  let s1 = a.substring(1, 3); // an
  console.log(s1);

  // *** substr(start, num) -> cat 1 chuoi bat dau tu vi tri start cho den khi chieu dai chuoi = num
  let s2 = a.substr(3, 5); // nguye
  console.log(s2);

  // *** slice(start), slice(start, end) -> giong nhu substring, tuy nhien co the truyen gia tri am
  // neu chi co 1 tham so, => no se cat chuoi tu vi tri tham so den het chuoi
  // neu chi co 1 tham so, tham so do la am (-), => no se cat tu vi tri str.length - tham so(-) do.
  let sl1 = a.slice(3); // nguyenDANNGUYEN
  let sl2 = a.slice(3, 6); // ngu
  let sl3 = a.slice(-5); // GUYEN
  console.log(sl1, sl2, sl3);

  // *** toLowerCase() -> tra ve chu thuong, toUpperCase() -> tra ve chu hoa
  // *** toLocaleLowerCase() -> tra ve chu thuong dua tren ngon ngu may chu
  // *** toLocaleUpperCase() -> tra ve chu hoa dua tren ngon ngu may chu
  let lo1 = a.toLocaleLowerCase(); // dannguyendannguyen
  let lo2 = a.toUpperCase(); // DANNGUYENDANNGUYEN
  console.log(lo1, lo2);

  // *** toString() -> chuyen, ep kieu du lieu ve string
  let ts1 = 1,
    ts2 = 2;
  console.log(ts1.toString() + ts2.toString()); // 12

  // *** split(separator) -> tach chuoi thanh cac mang chuoi voi dau ngan cach la separator
  let sp = "DA_01_LE_23";
  let sp1 = sp.split("_"); // ["DA", "01", "LE", "23"]
  console.log(sp1);

  // *** includes(string) -> true (string duoc tim thay trong chuoi), nguoc lai -> false
  let inc = a.includes("nguyenD");
  console.log(inc); // true

  // *** trim() -> tra ve chuoi sau khi da xoa bo (space, tab, breakline, ky tu ket thuc dong) o 2 dau chuoi
  // *** trimStart() / trimLeft() -> tra ve chuoi sau khi da xoa bo (space, tab,...) o dau chuoi
  // *** trimEnd() / trimRight() -> tra ve chuoi sau khi da xoa bo (space, tab,...) o cuoi chuoi
  let tr = "   ABC   ";
  console.log(tr.trim()); // "ABC"
  console.log(tr.trimStart()); // "ABC   "
  console.log(tr.trimRight()); // "   ABC"

  // *** valueOf() -> cung cap gia tri nguyen thuy cua doi tuong chuoi
  let obj = a.valueOf();
  console.log(obj); // dannguyenDANNGUYEN
};
ex2();

// VD chuyen "the football is the best of sports" thanh viet hoa cac chu cai dau
// Ham viet hoa chu cai dau
let upperF = (word) => {
  let first_letter = word.charAt(0);
  let rest = word.slice(1);
  first_letter = first_letter.toUpperCase();
  return first_letter.concat(rest);
};
// Ham tach chuoi thanh mang va ghep lai
let run = (str) => {
  let arr = str.split(" ");
  let exe = arr.map(upperF);
  return exe.join(" ");
};
console.log(run("the football is the best of sports")); // The Football Is The Best Of Sports

/*
Bieu thuc chinh quy: Regular Expression (RegExp): la viec khai bao 1 bieu thuc coi nhu la hang so, thuan loi cho viec tim kiem
su dung cac ham nhu split(), search(), match(), replace()

VD: Khia bao bieu thuc chinh quy phai duoc bao boi 2 ky tu /RegExp/
let re = /ab*c/ -> bieu thuc co chua 'a' o dau, 'b*' the hien ko co hoac co rat nhieu b o sau va co 'c; o cuoi
    "mabbbbbc" -> true, "abc" -> true, "ab c" -> false
let re = new RegExp("ab*c")
Cau truc: 
/Regexp/g -> tim tat ca cac gia tri dung bieu thuc,
/RegExp/i -> tra ve mot object gia tri duoc tim thay dau tien 
/RegExp/m -> tim tat ca cac gia tri ke ca khi xuong dong 
/RegExp/gi -> tim tat ca gia tri in hoa va thuong
. -> Khop voi bat ky ky tu nao
^regex -> Bieu thuc phai khop tai diem bat dau
regex$ -> Bieu thuc phai khop o cuoi dong
[abc] -> Co the khop voi a hoac b hoac c
[abc][vz] -> Co the khop voi a hoac b hoac c theo sau la v hoac z
[a-d1-7] -> Mot chuoi giua a va d, va 1 den 7
X|Z -> Tim X hoac Z
XZ -> Tim X theo sau la Z
$ -> Kiem tra ket thuc dong
\d -> so bat ky [0-9]
\D -> Ky tu khong phai la so [^0-9]
\s -> Ky tu khoang trang
\S -> Ky tu khong phai la khoang trang
\w -> Ky tu chu (a->z, A->Z, 0->9, _)
\W -> Ky tu khong phai la chu
\b -> Ky tu thuoc a-z hoac A-Z, hoac 0-9 hoac _
* -> Xuat hien 0 hoac nhieu lan {0,}
+ -> Xuat hien 1 hoac nhieu lan {1,}
? -> Xuat hien 0 hoac 1 lan {0,1}
{X} -> Xuat hien X lan
{X,Y} -> Xuat hien trong khoang X toi Y lan
*? -> Tim kiem khop nho nhat
*/

// VD: Ma hoa chuoi "   javascript is cool  " 'a' bang 4, 'e' bang 3, 'i' bang 1, 'o' bang 0, and 's' bang 5.
let encode = (str) => {
  str = str.trim(); // "javascript is cool"
  let code = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
  };
  let regexp = /[aeios]/gi;
  str = str.replace(regexp, (char) => {
    return code[char];
  });
  console.log(str);
};
encode("    javascript is cool  "); // j4v45cr1pt 15 c00l
