import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import multiInput from 'rollup-plugin-multi-input';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: ['src/index.ts', 'src/modules/**/*.ts'],
    output: [
        {
            dir: 'dist',
            format: 'esm',
        },
    ],
    plugins: [
        peerDepsExternal(),
        multiInput(),
        resolve({ extensions }),
        eslint(),
        typescript({
            typescript: require('typescript'),
        }),
        terser(),
    ],
};
