import { shallow } from "enzyme";
import Todo from "../index";

test("[Todo] should have an empty list", () => {
  const wrapper = shallow(<Todo />);
  expect(wrapper.state("undoList").length).toBe(0);
});

test("[Todo] should have Header Component", () => {
  const wrapper = shallow(<Todo />);
  const Header = wrapper.find("Header");
  const addUndoItemFn = Header.prop('updateList')
  
  expect(Header).not.toBeUndefined()
  expect(addUndoItemFn).not.toBeUndefined()
  expect(addUndoItemFn).toBe(wrapper.instance().updateList)  
});

test("[Todo] the length of list should be update when the addUndoItem is triggered", () => {
  const wrapper = shallow(<Todo />);
  const Header = wrapper.find("Header");

  const addFn = Header.prop('updateList')
  expect(addFn).not.toBeUndefined()
 
  const addedItem = 'item 1'
  addFn(addedItem)
  expect(wrapper.state('undoList').length).toBeGreaterThanOrEqual(1)
  expect(wrapper.state('undoList')[0]).toBe(addedItem)
})


export const dataTestName = (name) => `[data-test="${name}"]`;
