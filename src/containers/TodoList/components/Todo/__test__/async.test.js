import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../../../store/createStore";
import Todo from "../index";
import axios from "../__mocks__/axios"

let wrapper;
describe("[Async on TODO page]", () => {
  axios.success = true;
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

  test("如果请求错误，页面应该正常渲染", (done => {
      axios.success = false
      wrapper.update()
      setTimeout(() => {
        const listItems = wrapper.find(dataTestName("list-item"));
        expect(listItems.length).toBe(0)
        done()
      }, 1000);
  }))
  
 
});

export const dataTestName = (name) => `[data-test="${name}"]`;
