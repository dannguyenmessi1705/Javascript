const initial = {
  players: ["Messi"],
};
export default function reducer(state = initial, action, args) {
  switch (action) {
    case "ADD":
      const [newplayers] = args; // Truyền tham số mới vào mảng newplayers
      return {
        ...state,
        players: [...state.players, newplayers],
      };
    // Trả về object chứa các key cũ của state và thêm newplayers vào mảng cũ
    default:
      return state;
  }
}
