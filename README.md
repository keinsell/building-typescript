# typecraft

Experimental repository which contains my experiments and ideas of building TypeScript applications to be distributed in most coolest way, which is single file with all dependdencies inside of it. I literally trying this thing every year with hope to finally succeed but I'm no longer sure this is or even will be possible.

- Usage of `typescript@next` to compile TypeScript code into ES2015 JavaScript
- Usage of `@vercel/ncc` to compile transpiled JavaScript (by `tsc`) into bundled JavaScript. 
- Usage of `@vercel/pkg` to compile JavaScript (transpiled by `tsc`) into single executable file

## Usage

```bash
$ yarn
$ yarn build:tsc # dist/tsc
$ yarn build:ncc # dist/ncc
$ yarn build:pkg # dist/pkg (depends on dist/tsc)
```

## Unsupported Packages

- `bcrypt`
- `realm`
- Any other package that uses native modules...
