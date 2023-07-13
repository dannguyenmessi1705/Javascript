// Để import 1 module nào đó, thì module được import phải có câu lệnh export
// *** Import từ export default thì ta phải import đúng tên của nó (1 file js chỉ có đúng 1 export default)
// VD: Import default từ file log.js (trong file log.js phải có câu lệnh: export default <tên hàm>)
import print from "./lib/log.js";
print("Import Default");

// *** Import từ export thường thì ta dùng destructuring
// VDL Import thường từ file log.js (trong file log.js phải có câu lệnh: export <tên biến> )
// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./lib/constants.js";
// Hoặc cách khác, import tất cả ta dùng cú pháp sau
import * as constant from "./lib/constants.js";
print("Import Regular", constant.TYPE_ERROR);
print("Import Regular", constant.TYPE_LOG);
print("Import Regular", constant.TYPE_WARN);

// Ngoài ra ta có thể sử dụng file js trung gian để import (file index.js)
/*
CODE ở file index.js
import print2 from "./log2.js";
export default print2
// Hoặc cú pháp ngắn hơn
export {default} from './log2.js' // export ra default
*/
// Import default
import print2 from "./lib/index.js";
print2(2, 3); // 5

// *** Cách dùng * để import default cho file log3.js
import * as constant3 from "./lib/log3.js";
constant3.default("Default", "Import");
