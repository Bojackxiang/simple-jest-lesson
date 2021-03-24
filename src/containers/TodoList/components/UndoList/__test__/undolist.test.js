import UndoList from "../index";
import { shallow } from "enzyme";



test("[UndoList] should render successfully", () => {
  const wrapper = shallow(<UndoList list={[]} />);
  expect(wrapper.state("list").length).toBe(0);

  const listArr = ["a", "b", "c"];
  const wrapper2 = shallow(<UndoList list={listArr} />);
  expect(wrapper2.state("list").length).toBe(listArr.length);
});

test("[UndoList] should render successfully", () => {
  const listArr = ["a", "b", "c"];
  const wrapper = shallow(<UndoList list={listArr} />);

  const listItem = wrapper.find(dataTestName("item"));
  expect(listItem.length).toBe(listArr.length);
});

test("[UndoList] text should be display", () => {
  const listArr = ["a", "b", "c"];
  const wrapper = shallow(<UndoList list={listArr} />);

  const listItem = wrapper.find(dataTestName("item")).first();
  expect(listItem.text()).toBe("a");
});

test("[UndoList] list should have delete button", () => {
  const listArr = ["a", "b", "c"];
  const wrapper = shallow(<UndoList list={listArr} />);

  const deleteBtn = wrapper.find(dataTestName("delete-btn"));
  expect(deleteBtn.length).toBe(listArr.length);
});

test("[UndoList] list should have delete button called delete", () => {
  const listArr = ["a", "b", "c"];
  const wrapper = shallow(<UndoList list={listArr} />);

  const deleteBtn = wrapper.find(dataTestName("delete-btn")).first();
  expect(deleteBtn.text()).toBe("delete");
});

test("[UndoList] delete fn should be triggered if delete btn clicked", () => {
  const listArr = ["a", "b", "c"];
  const fn = jest.fn(); 
  const wrapper = shallow(<UndoList list={listArr} delete={fn}/>);  
  const deleteBtns = wrapper.find(dataTestName("delete-btn"));
  const deleteBtn = deleteBtns.at(1)

  deleteBtn.simulate("click");
  expect(fn).toHaveBeenLastCalledWith(1)

  
});

export const dataTestName = (name) => `[data-test="${name}"]`;
