# goload
auto-loads node modules marked as managed folders

### Getting Strated
goload requires <code>confyg</code> which is a node package that reads configurations from a config folder in your projects root directory. you can install it by running <code>npm i confyg</code>. once installed follow the below steps:

1. create a file at: <code>your-project/config/default.yaml</code>

```yaml
autoload:
  - controllers
  - router
```
2. <code>npm i goload</code>
3. then autoload file like in the example below:

```js
const autoloader  = require('goload')
const { router } = autoloader()
const allModules = autoloader()
```

