# Electron-Vue-Webpack-Startup

使用Electron、Vue.js、Webpack打包和热加载开发的启动模板工程，用于快速搭建初始开发环境


# 目录结构

```
 + app                    // 最终打包成Electron资源的文件夹
   + assets               // 字体、图片等资源文件
   + dist                 // Webpack生产环境配置下打包src文件夹输出目录
   - package.json         // 生产环境依赖 dependencies
 + build                  // Webpack配置文件以及其他配置文件存放目录
 + dist                   // Webpack开发环境配置下打包src文件夹输出目录
 + release                // Electron 打包程序输出文件夹，如.dmg、.exe等
 + src                    // 开发源码文件夹
   + main                 // 用于Electron主进程逻辑代码
   + renderer             // 用于Electron渲染进程逻辑代码
 - package.json           // 开发环境依赖 devDependencies
```