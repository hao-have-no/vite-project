const path = require("path");
import {createMockServer} from 'vite-plugin-mock'

module.exports = {
    //配置别名
    alias: {
        // 路径映射必须以/开头和结尾
        "/comps/": path.resolve(__dirname, "src/components"),
    },
    //配置代理服务器
    proxy:{
        '/api':{
            target:'http://haogege.typicode.com',
            changeOrigin:true,
            rewrite:path=>path.replace(/^\/api/,'')
        }
    },
    plugins: [
        //莫名其妙报错，
        createMockServer({
            // close support .ts file
            supportTs: false,
        }),
    ],
};
