# Compiling Uncompilable

Some people may actually know that I'm spending insane amounts of time on really stupid things - so welcome to next episode of "I have time and I do not know
what do with it...". Previously this repository was dedicated for compiling Node.js projects into binaries (incld.
[How to compile Node.js to binary release (with native modules)?](https://stackoverflow.com/questions/70662886/how-to-compile-node-js-to-binary-release-with-native-modules)). Don't mind me bro I have ADHD.

## Edition 2022

### Package Managers

- I've started using `yarn@3` even if it's pain in my ass because nobody really supports it and most people uses `yarn@1/2` which crashes on `yarn.lock`, so
  yeah. But it's slowly rising popularity so we're on good road in my opinion.
- `pnpm` also seem to rise popularity, especially within `Pure ESM` packages.

### Build Tools

Let's resume all of the build tools we know and have for Node.js (because front-end have literally millions of them and none working properly) - `ncc`,
`tsc/typescript`, `esbuild`, `webpack?`, `swc`.

- `tsup`
- `esbuild`
- `swc`
- `ncc`
- `pkg`

### Runtime

- `node`
- `deno`
- [`bun`](https://bun.sh/)

### Strongly Typed JavaScript

- Still `typescript`.

#### `typescript@next`

I'm an early-bidder kind of guy, and I would like to say on freshest version of Typescript in this repository. TypeScript code is compiled to `ES2015`
JavaScript code as defined in `tsconfig.json` and this version is also used as stock by `@vercel/ncc`.

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

| Supported |      Untested      |                        Unsupported                        |
| :-------: | :----------------: | :-------------------------------------------------------: |
| `bcrypt`  | `sqlite` `aws-sdk` | [`realm`](https://github.com/keinsell/typecraft/issues/6) |
