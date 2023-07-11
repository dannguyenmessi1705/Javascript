/* Đồng bộ trong Javascript. Javascript là ngôn ngữ đồng bộ tuy nhiên nó lại có 1 vài luồng dữ liệu bất đồng bộ
    sync (đồng bộ): các câu lệnh được thục thi lần lượt theo thứ tự từ trên xuống dưới
    async (bất đồng bộ): khi gặp các hàm sau: setTimeout, setInterval, fetch, XMLHttpRequest, request animation frame, các hàm liên quan đến đọc file
    Khi gặp 1 luồng dữ liệu bất đồng bộ, nó sẽ chờ cho tới khi hàm bất đồng xử lý xong thì mới thực hiện (chờ chạy thời gian, hay chờ kết nối mạng)
    Và được đưa vào Queue, để tránh tình trạng tắc nghẽn, trong hàng đợi Queue các hàm bất đồng bộ đang chờ để thực thi
    thì nó sẽ gọi tới các câu lệnh ở dưới trước, chừng nào gọi hết thì mới đến việc thực thi câu lệnh trong hàng đợi Queue
*/
const Async = () => {
  setTimeout(() => {
    console.log("Dòng này in cuối");
  }, 5000); // Hết 5s nó mới vào queue (vì nó mất 5s > 2s, nên sẽ vào queue muộn nhất)
  setTimeout(() => {
    console.log("Dòng này in thứ 2");
  }, 2000); // Hết 2s vào queue (vì nó ở trên nên sẽ vào queue trước)
  setTimeout(() => {
    console.log("Dòng này in thứ 3");
  }, 2000); // Hết 2s vào queue (vì nó ở dưới nên sẽ vào queue muộn hơn)
  console.log("Dòng này in đầu tiên");
};
// ---> Async();

/* --- Pain
Callback hell - Pyramid of doom (là hiện tượng nhiều callback lồng vào nhau trong js, làm cho việc xử lý rất phức tạp) 
*/
const Pain = () => {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
        console.log(3);
        setTimeout(() => {
          console.log(4);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  // Cứ sau 1s sẽ in ra lần lượt 1->4 => Tuy nhiên việc làm như này quá phức tạp gây ra Callback hell (Pain)
};
// ---> Pain();

/* --- Promise: Hàm xử lý bất đồng bộ, giải quyết Pain (Callback Hell) gây ra
Promise(function(resolve, reject)), trong đó resolve(thành công) và reject(thất bại) là 1 callback
Promise có 3 trạng thái: Pendding(đang chờ thành công hay thất bại), Fullfiled(thành công, gọi đến phương thức then(function)), Rejected(thất bại, gọi đến phương thức catch(function))
Ngoài ra còn có phương thức finally() -> Khi Promise trả về resolve hay reject thì phương thức finally(function) được thực thi
*/
const Promises = () => {
  // *** Tạo một promise trả về fullfiled
  const SuccessPromise = new Promise((resolve, reject) => {
    resolve(["Vietnam", "England", "France"]);
  });
  SuccessPromise.then((nations) => {
    console.log(nations);
  })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("Done"));
  // Vì trong constructor Promise ta trả về resolve nên nó sẽ gọi phương thức then() và finally()
  // Output: [ 'Vietnam', 'England', 'France' ] Done

  // *** Tạo một promise trả về rejected
  const RejectedPromise = new Promise((resolve, reject) => {
    reject("Thao tác bị từ chối");
  });
  RejectedPromise.then((value) => {
    console.log(value);
  })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("Done"));
  // Vì trong constructor Promise ta trả về reject nên nó sẽ gọi phương thức catch() và finally()
  // Output: Thao tác bị từ chối Done

  // *** Tạo một promise không trả về fullfiled hay reject
  const FinallyPromise = new Promise((resolve, reject) => {});
  RejectedPromise.then((value) => {
    console.log(value);
  })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("Page Not Found"));
  // Vì trong constructor Promise ta không trả về resolve và reject nên nó chỉ gọi phương thức finally()
  // Output: Page Not Found

  // *** Promise Chain -> Prommise nó có thể gọi đến nhiều phương thức then(),... cùng 1 lúc với điều kiện
  // phương thức ở trên (trước) phải trả về 1 giá trị (Promise mới hoặc dữ liệu nào đó), nếu ko các hàm đằng sau sẽ trả về undifined
  // trong quá trình thực thi chuỗi, nếu gặp chuỗi nào trả về reject() thì toàn bộ chuỗi then() sau ko hoạt động nữa mà nó sẽ nhảy ra phương thức catch()
  // Các câu lệnh sẽ được thực thi tuần tự từ trên xuống dưới, không phức tạp như trường hợp bị callback hell (từ trong ra ngoài)
  // VD: Giải quyết Callback hell của việc in ra từ 1 -> 3 dùng callback lồng nhau trong setTimeout ở VD trên
  const Chain = new Promise((resolve) => {
    resolve(); // Thành công
  });
  Chain.then(() => {
    // Trả về 1 giá trị tiếp tục là 1 promise (1)
    return new Promise((resolve) => {
      resolve(
        setTimeout(() => {
          console.log(1);
        }, 2000)
      );
    });
  })
    .then(() => {
      // Từ promise(1) được khai báo ta có thể gọi tiếp phương thức then() từ promise(1) tạo từ then() ở trên để tạo mới promise(2)
      return new Promise((resolve) => {
        resolve(
          setTimeout(() => {
            console.log(2);
          }, 2000)
        );
      });
    })
    .then(() => {
      // Từ promise(2) được khai báo ta có thể gọi tiếp phương thức then() từ promise(2) tạo từ then() ở trên để tạo mới promise(3)
      return new Promise((resolve) => {
        resolve(
          setTimeout(() => {
            console.log(3);
          }, 2000)
        );
      });
    })
    .finally(() => {
      setTimeout(() => {
        console.log("Done");
      }, 2000);
    });
};
// --> Promises(); // delay(1000) 1 2 3

// Một VD nữa về việc Dùng Promise thay cho Callback Hell
const CallbackHell = () => {
  function hell(value, cb) {
    cb(value);
  }
  // Không sử dụng Promise dẫn đến tạo ra callback hell
  hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
      hell(valueFromB + 1, function (valueFromC) {
        hell(valueFromC + 1, function (valueFromD) {
          console.log(valueFromD + 1);
        });
      });
    });
  });

  // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
  function notHell(value) {
    return new Promise(function (resolve) {
      resolve(value);
    });
  }

  notHell(1)
    .then(function (value) {
      return value + 1;
    })
    .then(function (value) {
      return value + 1;
    })
    .then(function (value) {
      return value + 1;
    })
    .then(function (value) {
      console.log(value + 1);
    });
};
// --> CallbackHell(); //5

// Ngoài ra Promise còn có các phương thức sau
// *** Promise.resolve(value) -> Cho ra 1 promise luôn luôn đúng (fullfilled)
// *** Promise.reject(value) -> Cho ra 1 promise luôn luôn bị từ chối (rejected)
// *** Promise.all([promise1, promise2, ...]) -> Làm cho các câu lệnh bất đồng bộ thực hiện 1 cách đồng thời, Cần truyền 1 mảng đối số các promise vào
// VD: promise1 mất 2s, promise2 mất 3s, promise3 mất 4s nếu không dùng Promise.all() -> Sẽ mất 9s, Nếu dùng -> chỉ mất 4s
// Nếu các promise truyền vào Promise.all() có 1 promise bị rejected, thì hàm này sẽ ko được thực thi
const PromiseAll = () => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve([7]);
    }, 2000);
  });
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve([8]);
    }, 3000);
  });
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve([9]);
    }, 4000);
  });
  // Dùng Promise.all() để thực thi promise1, promise2, promise3 đồng thời (nối 3 mảng này thành 1)
  Promise.all([promise1, promise2, promise3]).then((value) => {
    let array = value[0].concat(value[1], value[2]);
    console.log("Chỉ mất 4s để thực thi đồng thời 3 promise: ", array);
  });
};
// --> PromiseAll();

/// ỨNG DỤNG PROMISE, lấy ra đoạn chat và người chat đó
const ChatMessage = () => {
  // Một object chưa thông tin người chat
  const users = [
    {
      id: 1,
      name: "Dan",
    },
    {
      id: 2,
      name: "Thang",
    },
    {
      id: 3,
      name: "Messi",
    },
  ];
  // Một object chứa thông tin đoạn chat
  const messages = [
    {
      id: 1,
      user_id: 1,
      msg: "Vào game thôi",
    },
    {
      id: 2,
      user_id: 2,
      msg: "Tý nữa, đang tắm :))",
    },
    {
      id: 3,
      user_id: 1,
      msg: "OK baby",
    },
  ];
  // Fake API, giả sử ta lấy được đoạn chat trên từ API về, tạo hàm để get

  // Hàm lấy thông tin các đoạn chat (Promise)
  const getMessage = new Promise((resolve) => {
    resolve(messages);
  });
  // Hàm lấy user get bởi user_id đoạn chat dùng Promise (Hàm này return 1 promise)
  const getUserById = (userID) => {
    return new Promise((resolve) => {
      // Lọc ra những user có id bằng với userID truyền vào
      let result = users.filter((user) => {
        {
          return userID.includes(user.id);
        }
      });
      resolve(result);
    });
  };
  // Hàm xử lý, trả về đúng đoạn chat của người nào, đồng thời in ra màn hình
  getMessage
    .then((messages) => {
      // Đầu tiên lấy ra mảng user_id của đoạn chat
      const usersID = messages.map((msg) => {
        return msg.user_id;
      });
      return getUserById(usersID).then((users) => {
        // return về 1 dữ liệu (object) đoạn chat, dùng cho chuỗi then() phía sau
        return {
          users: users,
          messages: messages,
        }; // {users(id, name): Array(2), messages(id, user_id, msg): Array(3)},
      });
    })
    .then((data) => {
      // Lấy được dữ liệu tên người dùng tương ứng với đoạn chat (Xử lý in ra màn hình)
      const Element = document.getElementById("chat");
      let output = ""; // Tạo 1 chuỗi rỗng để cộng tổng lại các đoạn chat, tạo các thẻ
      data.messages.forEach((message) => {
        //Duyệt qua tất cả các tin nhắn
        let res = data.users.find((user) => {
          // Tìm user chat các đoạn tin của chính mình
          return message.user_id === user.id;
        });
        output += `<li>${res.name}: ${message.msg}</li>`;
      });
      // Thêm vào DOM
      Element.innerHTML = output;
    });
};
ChatMessage();
