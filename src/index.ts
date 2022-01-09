import { execSync } from "child_process";
import consola from "consola";

import { startHttpInterface } from "./interfaces/http";

/* https://github.com/vercel/pkg/issues/283 */
// require('bcrypt/lib/binding/napi-v3/bcrypt_lib.node')

async function main() {
  startHttpInterface();
}

main();
