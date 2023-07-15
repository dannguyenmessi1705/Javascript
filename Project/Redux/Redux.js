/* 
Redux là một công cụ quản lý trạng thái. Mặc dù nó được sử dụng chủ yếu với React, nhưng nó có thể được sử dụng với bất kỳ khung hoặc thư viện JavaScript nào khác. 
Nó rất nhẹ ở mức 2KB (bao gồm cả phụ thuộc), vì vậy bạn không phải lo lắng về việc nó làm cho ứng dụng của bạn có kích thước lớn.
Với Redux, trạng thái ứng dụng của bạn được giữ trong một "store" và mỗi thành phần có thể truy cập bất kỳ trạng thái nào mà nó cần từ "store"này. 
Sâu hơn một chút để xem tại sao bạn có thể cần một công cụ quản lý trạng thái.
*/
// import { createStore } from "https://cdn.skypack.dev/redux"; // Import Redux from CDN

//-----------------------------APP----------------------------------------------------------------------
const $ = document.querySelector.bind(document);
// Tạo 1 hàm handleReducer để trả về state (số tiền còn lại trong tài khoản khi thực hiện giao dịch),
// action là 1 object với (type gồm các hành động rút, nạp tiền; payload là giá trị yêu cầu từ action)
const initialState = 0;
function handleReducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload < 0 ? 0 : state - action.payload;
    default:
      return state;
  }
}

const store = createStore(handleReducer); // Dùng thư viện redux lấy ra hàm, hàm này có các phương thức như getState() -> trả về state, dispatch() -> bắn ra các object đê truyền vào handleReducer, subscribe(callback) -> trả về 1 hàm callback

// Tạo function xử lý cho việc rút tiền, hàm này sẽ trả về 1 object chứa type, payload của action rút tiền
function actionWithdraw(payload) {
  return {
    type: "WITHDRAW",
    payload,
  };
}

// Tạo function xử lý cho việc nạp tiền, hàm sẽ tra về 1 object chứa type, payloaf của action nạp tiền
function actionDeposit(payload) {
  return {
    type: "DEPOSIT",
    payload,
  };
}

// DOM
const output = $("#state");
const btnDeposit = $("#deposit");
const btnWithdraw = $("#withdraw");
render();

// Nếu cick Nạp tiền, sẽ gọi hàm dispach và truyền hành động nạp tiền
btnDeposit.onclick = () => {
  store.dispatch(actionDeposit(5));
};
// Nếu cick Rút tiền, sẽ gọi hàm dispach và truyền hành động rút tiền
btnWithdraw.onclick = () => {
  store.dispatch(actionWithdraw(5));
};
// Listener => mỗi lần click 1 sự kiện nó sẽ thực hiện 1 callback
store.subscribe(() => {
  render();
});
// Tạo hàm render ra giá trị của state (số dư tiền)
function render() {
  output.innerText = store.getState();
}

//------------------------Tự BULID createStore không cần import-----------------------------------------
// Tương tự, ta phải return createStore trả về 3 phương thức, getState(), dispatch(), subcribe()
function createStore(reducer) {
  // reducer truyền vào là 1 callback == handleReducer
  let state = reducer(undefined, {}); // do handleReducer nhận 2 giá trị mặc định và 1 object nên ta phải truyền đối số cho phù hợp
  const subcribers = [];
  return {
    getState() {
      return state;
    },
    dispatch(action) {
      // Trong reducer, state mới = state cũ + action(type) đi vào reducer đó
      state = reducer(state, action);
      // Sau khi cập nhật state mới, nó sẽ thông báo đến subcribers
      subcribers.forEach((subcriber) => subcriber()); // vì subcriber truyền vào subscribe là 1 callback, nên nó cũng là 1 hàm
    },
    subscribe(subcriber) {
      // Mỗi lần gọi tới là ta truyền các giá trị nhận được vào 1 mảng
      subcribers.push(subcriber);
    },
  };
}
