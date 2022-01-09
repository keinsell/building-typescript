# build-the-typescript

Experimental repository which contains my experiments and ideas of building TypeScript applications to be distributed in most coolest way, which is single file with all dependdencies inside of it. I literally trying this thing every year with hope to finally succeed but I'm no longer sure this is or even will be possible.

- Usage of `@vercel/ncc` to compile TypeScript to JavaScript
- Usage of `@vercel/pkg` to compile JavaScript into single executable file

## Progress of Repository
- `esb` and `ncc` compiles dependecies into bundle.
- `pkg` compiles bundle into single executable file, can be used from `esb`/`ncc` bundle.
- `esb` fails in case of `bcrypt` compilation but `ncc` doesn't have problem at all.
- `pkg` have trouble with handling native Node.js modules such as `bcrypt` where `ncc` doesn't.

> At this point there is serious trouble, because... We cannot use `ncc` build (which works without `node_modules` without any problem) in `pkg` because build will not proceed with some reason (when we'll specifiy `ncc` assets). `esb` crashes and doesn't wanna build because of native modules. I don't know that I'm supposed to do in such case. 

```
prebuild-install WARN install No prebuilt binaries found (target=v16.13.0 runtime=node arch=x64 libc= platform=win32)
```

- [ ] `pkg` should add native file `bcrypt/lib/binding/napi-v3/bcrypt_lib.node` to binary assets which will allow building an executable file.

## Usage

```bash
$ yarn
$ yarn build:tsc # dist/tsc
$ yarn build:ncc # dist/ncc
$ yarn build:esb # dist/esb
$ yarn build:pkg # dist/pkg
$ yarn build:tsc && yarn build:pkg # dist/pkg
```

## Unsupported Packages

- `realm`