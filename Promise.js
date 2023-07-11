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
};
Promises();
