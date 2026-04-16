# Failure Demo Scripts

This app ships with all checks passing by default. Use the scripts below to intentionally trigger failures and demonstrate why each check type matters.

## Prerequisites

- Docker running on your machine
- The app running on `localhost:3000` (`npm start` or `npm run dev`)
- Checkly private location `demo` agent running

## TCP Monitor Failure (Database Outage)

Demonstrates why TCP monitors add value beyond HTTP checks: a backing service can go down while the web tier stays healthy.

### Setup

1. Edit `src/__checks__/uptime/tcpMonitor.check.ts` and change the port from `3000` to `5432`:

```ts
request: {
  hostname: 'host.docker.internal',
  port: 5432,
```

2. Start Postgres so the check passes initially:

```bash
npm run demo:up
npx checkly test   # all green
```

### Break it

```bash
npm run demo:break-db   # stops Postgres
npx checkly test        # TCP monitor fails, everything else stays green
```

### The takeaway

The homepage loads fine. The API returns movies. The browser check completes checkout. But Postgres is down — only the TCP monitor caught it. In a real app, this is the difference between "everything looks fine" and "orders aren't persisting."

### Recover

```bash
npm run demo:heal       # restart Postgres, TCP monitor recovers
npx checkly test        # all green again
```

### Cleanup

```bash
npm run demo:down       # remove the Postgres container
```

Remember to revert `tcpMonitor.check.ts` back to port `3000` when done.

## Available Scripts

| Command | What it does |
|---|---|
| `npm run demo:up` | Start Postgres on :5432 |
| `npm run demo:break-db` | Stop Postgres (TCP monitor fails) |
| `npm run demo:heal` | Restart Postgres (TCP monitor recovers) |
| `npm run demo:down` | Remove the Postgres container |
| `npm run demo:status` | Show container state |
