import Todo from "../index";
import { shallow } from "enzyme";

describe("[Todo]", () => {
  test("[Todo] should render successfully", () => {
    const wrapper = shallow(<Todo />);
    const header = wrapper.find("Header");
    const UndoList = wrapper.find("UndoList");

    expect(header).not.toBeUndefined();
    expect(UndoList).not.toBeUndefined();

    // expect(header.length).toBe(1);
    expect(UndoList.length).toBe(1);
  });

  test("[Todo] the init undo list should be 0", () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper.state("list").length).toBe(0);
  });

  test("[Todo] should have update and delete function", () => {
    const wrapper = shallow(<Todo />);
    const updateListFn = wrapper.instance().updateList;
    const deleteFn = wrapper.instance().delete;

    expect(updateListFn).not.toBeUndefined();
    expect(deleteFn).not.toBeUndefined();
  });

  test("[Todo] should pass list and delete to undo list", () => {
    const wrapper = shallow(<Todo />);
    const undoListComponent = wrapper.find("UndoList");
    const listProps = undoListComponent.prop("list");
    const deleteFn = undoListComponent.prop("delete");

    expect(listProps).not.toBeUndefined();
    expect(deleteFn).not.toBeUndefined();
  });

  test("[Todo] delete fn should work ", () => {
    const wrapper = shallow(<Todo />);
    const deleteFn = wrapper.instance().delete;

    wrapper.setState({
      list: ["a", "b", "c"],
    });
    expect(wrapper.state("list").length).toBe(3);

    deleteFn("0");
    expect(wrapper.state("list").length).toBe(2);
  });
});
