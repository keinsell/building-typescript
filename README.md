# build-the-typescript

Experimental repository which contains my experiments and ideas of building TypeScript applications to be distributed in most coolest way, which is single file with all dependdencies inside of it. I literally trying this thing every year with hope to finally succeed but I'm no longer sure this is or even will be possible.

- Usage of `@vercel/ncc` to compile TypeScript to JavaScript
- Usage of `@vercel/pkg` to compile JavaScript into single executable file

## Progress of Repository
- `esb` and `ncc` compiles dependecies into bundle.
- `pkg` compiles bundle into single executable file, can be used from `esb`/`ncc` bundle.


## Usage

```bash
$ yarn
$ yarn build:tsc # dist/tsc
$ yarn build:ncc # dist/ncc
$ yarn build:esb # dist/esb
$ yarn build:pkg # dist/pkg
```

## Unsupported Packages

- `realm`