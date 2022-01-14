# typecraft

Repository was created with simple question on mind [How to compile Node.js to binary release (with native modules)?](https://stackoverflow.com/questions/70662886/how-to-compile-node-js-to-binary-release-with-native-modules) which lead me to creation of this repository and testing all available solutions that can help resolve such no-sense question. In this repository I'm willing to experiment with available solutions for that (`pkg`, `caxa`, `nexe`) and some code bundlers for back-end such as `webpack`, `ncc` and `esbuild`.

## Purpose of repository

When my experiments will be completed and I'll have enough research on building such packages on node, this repository will likely become monorepository that will hold univeral boilerplate for every Node.js back-end project with configured CI pipelines and code quality tools.

## Tools of repository

#### `typescript@next`

I'm an early-bidder kind of guy, and I would like to say on freshest version of Typescript in this repository. TypeScript code is compiled to `ES2015` JavaScript code as defined in `tsconfig.json` and this version is also used as stock by `@vercel/ncc`.

- Usage of `@vercel/ncc` to compile transpiled JavaScript (by `tsc`) into bundled JavaScript. 
- Usage of `@vercel/pkg` to compile JavaScript (transpiled by `tsc`) into single executable file

## Usage

```bash
$ yarn
$ yarn build:tsc # dist/tsc
$ yarn build:ncc # dist/ncc
$ yarn build:pkg # dist/pkg (depends on dist/tsc)
```

## Native Packages

There was some mess with native packages but I think with flow of time I'll find a good way of including them into build.

| Supported 	| Untested 	| Unsupported 	|
|:---------:	|:--------:	|:-----------:	|
|`bcrypt`       |`sqlite` `aws-sdk` | [`realm`](https://github.com/keinsell/typecraft/issues/6)          	|