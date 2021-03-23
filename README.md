### Enzyme 
`npm install enzyme --legacy-peer-deps`
`npm install --save-dev @wojtekmaj/enzyme-adapter-react-17`
`npm install jest-enzyme --save-dev `

#### Shallow vs mount
shallow: 智慧渲染当前组建，不会渲染子组建
mount：子组建也会一起渲染出来

#### wrapper 
生成生成一个浅渲染的组建，这样就不会同时渲染子组建
```js
const wrapper = shallow(<App />);
```
方法list 
```js
wrapper.find(".className")
wrapper.find(".className").prop('propName')
wrapper.find(`[data-test=${dataTestName}]`)
```

#### Snapshot 
使用场景，一切我们不需要再去改变的组建
```js
expect(wrapper).toMatchSnapShot()
```