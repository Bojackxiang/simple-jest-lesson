### 匹配器

toBe 就是一个匹配器
<br>
```json
"scripts": {
    "test": "jest --watchAll",
    "start": "node index.js"
  },
```
<br>
expect().toEqual() 只会匹配内容，而不会匹配引用， 否则会报错，所以说在object 里面的时候，全部都适用 toEqual()

### 匹配起 list
• toBe()
• toEqual()
• toBeNull()
• toBeNull()
• toBeUndefined()
• toBeTruthy();
• toBeFalsy();
• not.toBe()
• toBeGreaterThan(x)
• toBeGreaterThanOrEqual(x)
• toBeLessThan(x)
• toMatch(x)
• toContain(x)
• toThrow()

