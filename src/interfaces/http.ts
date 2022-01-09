import Fastify from 'fastify'
import consola from "consola";

const fastify = Fastify();

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

export const startHttpInterface = async () => {
  try {
    await fastify.listen(3000);
    consola.success("Application running at http://localhost:3000");
  } catch (err) {
    consola.error(err);
    process.exit(1);
  }
};
