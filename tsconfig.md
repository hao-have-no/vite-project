## "compilerOptions"配置项详解

target:target用于指定编译之后的版本目录  常见: "es5","esnext",
esnext 是一个 JavaScript 库，可以将 ES6 草案规范语法转成今天的 JavaScript 语法。

module 用来指定要使用的模板标准

lib:lib用于指定要包含在编译中的库文件

jsx: jsx代码用于的开发环境:'preserve','react-native',or 'react

socuceMap:socuceMap用来指定编译时是否生成.map文件

strict:strict用于指定是否启动所有类型检查，如果设为true这回同时开启下面这几个严格检查，默认为false

declaration:declaration用来指定是否在编译的时候生成相的d.ts声明文件，如果设为true,编译每个ts文件之后会生成一个js文件和一个声明文件

isolatedModules指定是否将每个文件作为单独的模块:isolatedModules指定是否将每个文件作为单独的模块，默认为true，他不可以和declaration同时设定

noUnusedLocals:noUnusedLocals用于检查是否有定义了但是没有使用变量，对于这一点的检测，使用ESLint可以在你书写代码的时候做提示，你可以配合使用，他的默认值为false

noUnusedParameters:noUnusedParameters用于检测是否在函数中没有使用的参数

moduleResolution:moduleResolution用于选择模块解析策略，有"node"和"classic"两种类型

## include
可以指定要编译的路径列表
## files
可以配置一个数组列表
## extends
可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置
## 
