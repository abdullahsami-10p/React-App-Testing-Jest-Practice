import { addTodo, deleteTodo } from "../screens/TodoList";

describe("testing addTodo and deleteTodo function", () => {
  test("", () => {
    let data = ["I wached football"],
      text = "I played cricket";
    expect(addTodo(text, data).length).toEqual(2);
    expect(deleteTodo(0, data).length).toEqual(0);
  });
});
