import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'

export default {
    input: 'src/main.js',
    output: {
        format: 'umd',
        file: 'dist/vue-flex-box.js',
        name: 'SidLineFlexBox',
        //exports: 'named',
        //globals: 'SidLineFlexBox',
    },
    plugins: [
        scss(),
        vue({ autoStyles: false, styleToImports: true }),
        resolve({ jsnext: true, main: true, browser: true }),
        commonjs ()
    ],
    external: ['vue'],
}