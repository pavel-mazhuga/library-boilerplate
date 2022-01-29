import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import multiInput from 'rollup-plugin-multi-input';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default {
    input: ['src/index.ts', 'src/modules/**/*.ts'],
    output: [
        {
            dir: 'dist',
            format: 'esm',
        },
    ],
    external,
    plugins: [
        multiInput(),
        resolve({ extensions }),
        eslint(),
        typescript({
            typescript: require('typescript'),
        }),
        terser(),
    ],
};
