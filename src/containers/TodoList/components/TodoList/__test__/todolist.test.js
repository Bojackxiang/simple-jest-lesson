import { shallow } from "enzyme";
import TodoList from "../../TodoList/index";

test("[TodoList] should have an empty list", () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state("undoList").length).toBe(0);
});

test("[TodoList] should have header component", () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");
  const addUndoItemFn = Header.prop('addUndoItem')
  
  expect(addUndoItemFn).not.toBeUndefined()
  expect(addUndoItemFn).toBe(wrapper.instance().addUndoItem)  
});

test("[TodoList] the length of list should be update when the addUndoItem is triggered", () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");

  const addFn = Header.prop('addUndoItem')
  expect(addFn).not.toBeUndefined()
 
  const addedItem = 'item 1'
  addFn(addedItem)
  expect(wrapper.state('undoList').length).toBeGreaterThanOrEqual(1)
  expect(wrapper.state('undoList')[0]).toBe(addedItem)
})


export const dataTestName = (name) => `[data-test="${name}"]`;
