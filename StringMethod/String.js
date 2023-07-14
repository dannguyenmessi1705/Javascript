// xử lý string trong JS như xử lý 1 object, vì String có các thuộc tính như (length, prototype)
// length -> trả về do dai của chuỗi
// Object.propotype.name -> Thêm thuộc tính hay phương thức
let ex1 = () => {
  let a = "Java";
  console.log(a.length); // 4
  String.prototype.add_last = function (char) {
    // Ko được dùng arrow function với hàm có prototype, this,...
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
  // *** concat() -> nối 2 chuỗi
  a = a.concat(b);
  console.log(a); // dannguyenDANNGUYEN

  // *** charAt() -> trả về giá trị của phần tử tại chỉ số đưa vao, charCodeAt() -> trả về giá trị thuộc bảng Unicode
  console.log(a.charAt(2)); // n
  console.log(a.charCodeAt(2)); // 110

  // *** indexOf(value, startIndex) -> trả về vị trí đầu tiên của chuỗi cần tìm, lastIndexOf(value, startIndex) -> trả về vị trí cuối cùng của chuỗi cần tìm, nếu không tìm thấy -> -1
  let i1 = a.indexOf("an");
  console.log(i1); // 1 (do bắt đầu tìm thấy chữ 'a' ở vị trí thứ 1)
  let i2 = a.lastIndexOf("n");
  console.log(i2); // 8

  // *** search(RegExp) -> trả về vị trí đầu tiên tìm kiếm được, nếu không -> -1
  console.log(a.search("nn")); //2

  // *** match(RegExp) -> trả về mảng các giá trị tìm kiếm được (/Regexp/g), trả về một object giá trị được tìm thay đầu tiên trong mảng(/RegExp/i), trả về các giá trị in hoa va thường (/RegExp/gi), nếu không -> null
  console.log(a.match(/n/gi)); // [ 'n', 'n', 'n', 'N', 'N', 'N' ]

  // *** repalce(RegExp) -> thay thế tất ca chuỗi nhất định (biểu thức chính quy) bằng 1 chuỗi mới
  let r1 = a.replace(/dan/gi, "Dan");
  console.log(r1); // DannguyenDanNGUYEN

  // *** substring(start, end) -> cắt 1 chuỗi bắt đầu từu vị trí start đến vị trí (end-1)
  let s1 = a.substring(1, 3); // an
  console.log(s1);

  // *** substr(start, num) -> cắt 1 chuỗi bắt đầu từ vị trí start cho đến khi chieu dai chuỗi = num
  let s2 = a.substr(3, 5); // nguye
  console.log(s2);

  // *** slice(start), slice(start, end) -> giống như substring, tuu nhiên có thể truyền giá trị âm
  // nếu chỉ có 1 tham số, => nó sẽ cắt chuỗi từ vị trí tham số đến hết chuỗi
  // nếu chỉ có 1 tham số, tham số đó là âm (-), => nó sẽ căt từ vị trí str.length - tham so(-) đó.
  let sl1 = a.slice(3); // nguyenDANNGUYEN
  let sl2 = a.slice(3, 6); // ngu
  let sl3 = a.slice(-5); // GUYEN
  console.log(sl1, sl2, sl3);

  // *** toLowerCase() -> trả về chữ thường, toUpperCase() -> trả về chữ hoa
  // *** toLocaleLowerCase() -> trả về chữ thường dựa trên ngôn ngữ máy chủ
  // *** toLocaleUpperCase() -> trả về chữ hoa dựa trên ngôn ngữ máy chủ
  let lo1 = a.toLocaleLowerCase(); // dannguyendannguyen
  let lo2 = a.toUpperCase(); // DANNGUYENDANNGUYEN
  console.log(lo1, lo2);

  // *** toString() -> chuyển, ép kiểu dữ liệu về string
  let ts1 = 1,
    ts2 = 2;
  console.log(ts1.toString() + ts2.toString()); // 12

  // *** split(separator) -> tách chuỗi thành các mảng chuỗi với dấu ngăn cách là separator
  let sp = "DA_01_LE_23";
  let sp1 = sp.split("_"); // ["DA", "01", "LE", "23"]
  console.log(sp1);

  // *** includes(string) -> true (string được tìm thấy trong chuỗi), ngược lại -> false
  let inc = a.includes("nguyenD");
  console.log(inc); // true

  // *** trim() -> trả về chuỗi sau khi đã xoá bỏ (space, tab, breakline, Ký tự kết thúc dong) ở 2 đầu chuỗi
  // *** trimStart() / trimLeft() -> trả về chuỗi sau khi da xoá bỏ (space, tab,...) ở đầu chuỗi
  // *** trimEnd() / trimRight() -> trả về chuỗi sau khi da xoá bỏ (space, tab,...) ở cuối chuỗi
  let tr = "   ABC   ";
  console.log(tr.trim()); // "ABC"
  console.log(tr.trimStart()); // "ABC   "
  console.log(tr.trimRight()); // "   ABC"

  // *** valueOf() -> cung cấp giá trị nguyên thủy của chuỗi
  let obj = a.valueOf();
  console.log(obj); // dannguyenDANNGUYEN
};
ex2();

// VD chuyển "the football is the best of sports" thành viết hoa các chữ cái đầu
// Hàm viết hoa chữ cái đầu
let upperF = (word) => {
  let first_letter = word.charAt(0);
  let rest = word.slice(1);
  first_letter = first_letter.toUpperCase();
  return first_letter.concat(rest);
};
// Hàm tách chuỗi thành mảng và ghép lại
let run = (str) => {
  let arr = str.split(" ");
  let exe = arr.map(upperF);
  return exe.join(" ");
};
console.log(run("the football is the best of sports")); // The Football Is The Best Of Sports

/*
biểu thức chính quy: Regular Expression (RegExp): là viêcc khai báo 1 biểu thứcc coi như là hằng số, thuận lợi cho việc tìm kiếm
sử dụng các hàm như split(), search(), match(), replace()

VD: Khai báo biểu thức chính quy phải được bao bởi 2 ký tự //, vd /RegExp/
let re = /ab*c/ -> biểu thức có chứa 'a' ở đầu, 'b*' thể hiện ko có hoặc có rất nhiều b ở sau và có 'c; ở cuối
    "mabbbbbc" -> true, "abc" -> true, "ab c" -> false
let re = new RegExp("ab*c")
Cấu trúc: 
/Regexp/g -> tìm tất cả các giá trị dùng biểu thức,
/RegExp/i -> trả về một object giá trị được tìm thấy đầu tiên 
/RegExp/m -> tìm tất cả các giá trị ở đầu va cuối dòng (^ and $)
/RegExp/gi -> tìm tất cả giá trị in hoa và thường
/RegExp/gi.test(str) -> kiếm tra xem có biểu thức chính quy trong str hay ko
. -> Khớp với bất kỳ ký từ nào
^regex -> biểu thức phải khớp tại điểm bắt đầu
regex$ -> biểu thức phải khớp ở cuối dong
[abc] -> Có thể khớp với a hoặc b hoặc c
[abc][vz] -> Có thể khớp với a hoặc b hoặc c theo sau là v hoặc z
[a-d1-7] -> một chuỗi giữa a và d, và 1 đến 7
X|Z -> tìm X hoặc Z
XZ -> tìm X theo sau là Z
$ -> kiếm tra kết thúc dòng
\d -> số bất kỳ [0-9]
\D -> Ký tự ko phải là số [^0-9]
\s -> Ký tự khoảng trắng
\S -> Ký tự không phải là khoảng trắng
\w -> Ký tự chữ (a->z, A->Z, 0->9, _)
\W -> Ký tự không phải là chữ
\b -> Ký tự thuộc a-z hoặc A-Z, hoặc 0-9 hoặc _
* -> Xuất hiện 0 hoặc nhiều lần {0,}
+ -> Xuất hiện 1 hoặc nhiều lần {1,}
? -> Xuất hiện 0 hoặc 1 lần {0,1}
{X} -> Xuất hiện X lần
{X,Y} -> Xuất hiện từ X đến Y lần
{X,} -> Xuất hiện X lần hoặc nhiều hơn
*? -> tìm kiếm khớp nhỏ nhất
*/

// VD: Mã hoá chuỗi "   javascript is cool  " 'a' = 4, 'e' = 3, 'i' = 1, 'o' = 0, and 's' = 5.
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
