### 异步测试
#### Isue: The async function is not run until the call back, the process is finished. 
Solve: use done to solve the issue. 

#### Catch is special case 
use `expect.assertions(1);`
if use catch, you need to use 
**expect.asseration(1) **
to make sure at least one expect should be run

#### expect().resolves.toMatchObject()
Check if the data return contains this block of data

#### expect().rejects.toThrow()
This request will throw an error, a way to relace the expect.asserations(1)


#### await 
Just added the await before the expect for handing function that returns promise 

#### try catch 
 add `expect.assertions(1)` just in case