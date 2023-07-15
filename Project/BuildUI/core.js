// Tag Template, value là Array chứa các biến nội suy ${value}
export default function html([first, ...strings], ...values){
    return values.reduce((acc, cur) => {
        return acc.concat(cur, strings.shift())
    }, [first])
    .filter(value => value && value !== true || value === 0) // Lấy giá trị Truethy (nhưng khác true) hoặc lấy giá trị 0
    .join('')
}

export function createStore(reducer) {
    let state = reducer() // Hàm reducer() trả về state ban đầu
    const roots = new Map() // Giống như khai báo 1 object, tuy nhiên Map có thể lấy key là 1 object (Object chỉ là chuỗi), và có tính chính chất lặp qua các phần tử

    // Tạo hàm render(), lặp qua roots để render ra view
    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }
    return {
        // Nhận view và đẩy ra root
        attach(component, root) {
            roots.set(root, component) // Thêm thuộc tính key(root) với value(component)
            render() // Sau khi thêm vào Map thì nó sẽ render ra ngoài luôn
        },
        // Tạo hàm connect kết nối giữa store với view
        connect(selector = state => state) {
            // Trả về 1 arrow function
            return component => (props, ...args) => {
                return component(Object.assign({}, props, selector(state), ...args)) // Do props, ...args, state đều là object nên cần ném hết tất cả chúng vào 1 Object mới
            }
        },
        // Tạo hàm dispatch mô tả hành động để đẩy sang cho reducer
        dispatch(action, ...args) {
            state = reducer(state, action, args) // Trả lại state mới sau khi thực hiện action
            // update view
            render()
        }
    }
}