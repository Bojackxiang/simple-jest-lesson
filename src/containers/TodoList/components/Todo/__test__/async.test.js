import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../../../store/createStore";
import Todo from "../index";

describe("[Async on TODO page]", () => {
  beforeEach(() => {
    const wrapper = mount(
      <Provider store={store}>
        <Todo />
      </Provider> 
    );
  });
  test("用户打开页面应该展现数据", () => {
    
  });
});
