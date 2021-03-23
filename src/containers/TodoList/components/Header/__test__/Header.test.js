import { shallow } from "enzyme";
import Header from "../Header";

test("[Header] should have an input element", () => {
  const wrapper = shallow(<Header />);
  const input = wrapper.find(dataTestName("input"));

  expect(input.length).toBe(1);
});

test("[Header] should have empty value when init", () => {
  const wrapper = shallow(<Header />);
  const input = wrapper.find(dataTestName("input"));
  const initValue = input.prop("value");

  expect(initValue).toEqual("");
});

test("[Header] state and input value should updated", () => {
  const wrapper = shallow(<Header />);
  const input = wrapper.find(dataTestName("input"));
  const updatedValue = "updated";
  // simulate 的使用
  input.simulate("change", {
    target: {
      value: updatedValue,
    },
  });
  // 这边需要小心，这里的state 是 wrapper 的state
  expect(wrapper.state("value")).toEqual(updatedValue);
  //  ! input 老的element 还是原来的 值
  const newInput = wrapper.find(dataTestName("input"));
  expect(newInput.prop("value")).toBe(updatedValue);
});

test("[Header] when press enter, if not value should do nothing", (done) => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const input = wrapper.find(dataTestName("input"));
  const value = "";
  wrapper.setState({
    value: value,
  });

  // 回车
  input.simulate("keyUp", {
    keyCode: 13,
  });
  expect(fn).not.toHaveBeenCalled();
  done();
});

test("[Header] when press enter, fu should be triggered", (done) => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const input = wrapper.find(dataTestName("input"));
  const value = "hello";
  wrapper.setState({
    value: value,
  });

  // 回车
  input.simulate("keyUp", {
    keyCode: 13,
  });
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledWith(value);
  done();
});

test("[Header] when press enter, the input should be cleared", (done) => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const input = wrapper.find(dataTestName("input"));
  const value = "hello";
  wrapper.setState({
    value: value,
  });

  // 回车
  input.simulate("keyUp", {
    keyCode: 13,
  });

  const newInput = wrapper.find(dataTestName("input"));
  const newInputValue = newInput.prop("value");
  expect(newInputValue).toBe("");

  done();
});

export const dataTestName = (name) => `[data-test="${name}"]`;
