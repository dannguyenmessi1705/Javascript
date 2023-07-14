function ex1() {
  let not = "The first sentence";
  function change() {
    let a = 3,
      b = true;
    if (a == 3) not = "The second sentence";
    console.log(a);
    console.log(b);
  }
  console.log(not);
  change();
  console.log(not);
}
function ex2(){
    return "This is code"
}
function ex3(){
    let arr = [3, 4, 5],
    obj = {
        'Ten': 'Dan Nguyen',
        'Tuoi': 22
    }
    console.log(arr)
    console.log(obj)
}
ex1()
console.log(ex2())
ex3()