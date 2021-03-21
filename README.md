### 钩子函数

#### beforeAll

#### beforeEach

#### afterEach

#### afterAll

#### describe 

#### describe 的注意点
如果是describe 里面潜逃 describe，比如一个 describe 下面有多个 describe, 那么会先去执行所有的 子 describe 里面的所有的代码，然后再去执行父类 describe 里面的钩子函数