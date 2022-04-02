# Compiling Uncompilable

Some people may actually know that I'm spending insane amounts of time on really stupid things - so welcome to next episode of "I have time and I do not know
what do with it...". Previously this repository was dedicated for compiling Node.js projects into binaries (incld.
[How to compile Node.js to binary release (with native modules)?](https://stackoverflow.com/questions/70662886/how-to-compile-node-js-to-binary-release-with-native-modules)).

Recently on my way happened new issues and a lot more questions about JavaScript itself and combination of it with TypeScript - I do not really know how long
Pure ESM is in our ecosystem because I lost track for some time, however my question here is WHY PURE ESM IS SO FUCKING SHIT? Why I cannot use CommonJS with
ESM? Why ESM crashing builds like a crazy? Why should I even the fuck use this piece of crap?

Some `npm` package developers are catching the trend of ESM and literally migrating packages to ESM so CommonJS cannot use them at all (we're talking there
about CommonJS which is like... 70% of actual software in Node.js). And by all this I fell like everything that is going on actually on Node.js ecosystem can be
considered as leagacy. If Node.js will somehow drop CommonJS and switch to ESM on Nightly releases it would be sad to be not prepared for such thing - so I've
decided here to compare actual builders and find optimal way of migrating packages from CommonJS to ESM.

## Purpose of repository

When my experiments will be completed and I'll have enough research on building such packages on node, this repository will likely become monorepository that
will hold univeral boilerplate for every Node.js back-end project with configured CI pipelines and code quality tools.

## Tools of repository

#### `typescript@next`

I'm an early-bidder kind of guy, and I would like to say on freshest version of Typescript in this repository. TypeScript code is compiled to `ES2015`
JavaScript code as defined in `tsconfig.json` and this version is also used as stock by `@vercel/ncc`.

-  Usage of `@vercel/ncc` to compile transpiled JavaScript (by `tsc`) into bundled JavaScript.
-  Usage of `@vercel/pkg` to compile JavaScript (transpiled by `tsc`) into single executable file

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
