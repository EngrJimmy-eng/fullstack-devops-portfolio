export async function onRequest(context) {
  const { request, env } = context;

  if (!env.API_ORIGIN) {
    return new Response("API_ORIGIN is not configured", { status: 500 });
  }

  const incomingUrl = new URL(request.url);
  const originUrl = new URL(env.API_ORIGIN);

  originUrl.pathname = incomingUrl.pathname;
  originUrl.search = incomingUrl.search;

  const headers = new Headers(request.headers);
  headers.delete("host");

  const proxyRequest = new Request(originUrl.toString(), {
    method: request.method,
    headers,
    body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
    redirect: "manual",
  });

  return fetch(proxyRequest);
}
