import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../../../store/createStore";
import Todo from "../index";

let wrapper;
describe("[Async on TODO page]", () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  });
  
  test("componentDidAmount 应该正常被调用", (done) => {
    /**
     * question: 需要解决 component did mount 更新完之后的代码
     * solution: use set timeout to solve it.
     * Note: 因为前面是个异步，所以我们也要把测试放到一个异步里面
     */
    setTimeout(() => {
      wrapper.update()
      // console.log(wrapper.debug())
      const listItems = wrapper.find(dataTestName("list-item"));
      expect(listItems.length).toBe(1);
      done()
    }, 0);
    
  });

  


});

export const dataTestName = (name) => `[data-test="${name}"]`;
