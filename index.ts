const server = Bun.serve({
    port: Bun.env.PORT ?? 3000, // 修改端口為 Bun.env.PORT
    fetch() {
      return new Response("Bun on Zeabur!");
    },
  });
   
  console.log(`Listening on http://localhost:${server.port} ...`);