#### Jest 的简单配置 

`npx jest --init `
`npx jest --coverage `
`npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D`
.babelrc
```json
{
    "presets":[
        [
                "@babel/preset-env",{
                "targets":{
                    "node":"current"
                }
            }
        ]
    ]
}
```