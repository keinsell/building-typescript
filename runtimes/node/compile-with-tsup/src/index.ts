import { startHttpService } from "@cc/application";

export async function main(): Promise<Boolean> {
  await startHttpService();
  return true;
}
