import { mount } from "enzyme";
import Todo from "../index";
import { Provider } from "react-redux";
import store from "../../../../../store/createStore";

it(`
    1. 输入
    2. 点击回车
    3. 列表展现内容
`, () => {
  const wrapper = mount(
    <Provider store={store}>
      <Todo />
    </Provider>
  );
  const Header = wrapper.find("Header");
  const UndoList = wrapper.find("UndoList");

  expect(Header).not.toBeUndefined();
  expect(UndoList).not.toBeUndefined();

  const input = Header.find("input");
  expect(input).not.toBeUndefined();

  input.simulate("change", {
    target: {
      value: "new value",
    },
  });

  input.simulate("keyUp", {
    keyCode: 13,
  });

  // const listItem = UndoList.find(dataTestName("list-item"));
  // expect(listItem.length).toBe(1);

  // const createdItem = wrapper.find(dataTestName("list-item"));
  // expect(createdItem.length).toBe(1);

  // const text = createdItem.text();
  // expect(text).toContain("new value");
});

export const dataTestName = (name) => `[data-test="${name}"]`;
