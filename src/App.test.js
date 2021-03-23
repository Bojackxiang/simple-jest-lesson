import App from "./App";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
let wrapper = null
beforeEach(() => {
  wrapper = shallow(<App/>)  
})

test("rendering with out crashing ", () => {
  const div = document.createElement("div"); // 创建一个 div
  ReactDOM.render(<App />, div); // 把 app 挂载到 div 中
  // get component named "app"
  const container = div.getElementsByClassName("app");
  expect(container.length).toBeGreaterThanOrEqual(1);
});

// ENZYME: 找一个 class
test("use the enzyme to rendering test", () => {
  const wrapper = shallow(<App />); // 这边相当于把 app 组建运行在了内存里
  const appContainer = wrapper.find(".app").length;
  expect(appContainer).toBe(1); // 在 shallow 中找到一个 .app 的class component
});

//  ENZYME: 找一个属性
test("should find the property named wrapper", () => {
  const wrapper = shallow(<App />); // 这边相当于把 app 组建运行在了内存里
  const titleProps = wrapper.find(".app").prop("title"); // 获取 属性 的名称
  // console.log(wrapper.debug()) // debug
  expect(titleProps).toEqual("wrapper"); // 在 shallow 中找到一个 .app 的class component
});

test("test by data-test selector", () => {
  const componentLength = wrapper.find('[data-test="container"]').length
  const compLength = wrapper.find(dataTestName('container')).length
  expect(componentLength).toBe(1)
  expect(compLength).toBe(1)
})

test("test by new match", () => {
  const component = wrapper.find(dataTestName('container'));
  // 检测 props
  const props = component.prop('title')
  expect(props).toBe('wrapper')
})

test("snapshot 的测试", () => {
    expect(wrapper).toMatchSnapshot()
})

export const dataTestName = (name) => `[data-test="${name}"]`
