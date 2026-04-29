# Checkly Demo App (Checkflix)

A demo Express app showcasing various Checkly monitoring check types with OpenTelemetry tracing.

## Check Types Included

- **API Check** - `__checks__/apiCheck.check.ts`
- **Browser Check** - `__checks__/browserCheck.check.ts`
- **Heartbeat Check** - `__checks__/heartbeat.check.ts`
- **Multi-Step Check** - `__checks__/multiStepCheck.check.ts`
- **Status Page Check** - `__checks__/statusPage.check.ts`
- **TCP Monitor** - `__checks__/tcpMonitor.check.ts`
- **URL Monitor** - `__checks__/urlMonitor.check.ts`
- **Playwright Tests** - `src/api-flow.spec.ts`, `src/checkFlix-checkout.spec.ts`

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a `.env` file

Create a `src/.env` file with your Checkly OTel API key:

```
CHECKLY_OTEL_API_KEY=<your-checkly-otel-api-key>
```

Coralogix is configured via Checkly's Coralogix integration (Account Settings → Integrations → Coralogix), so no Coralogix credentials are needed in `.env`.

## Running the App

### Start the app (without tracing)

```bash
npm start
```

### Start the app with OpenTelemetry tracing

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Running Checkly Checks

### Test checks locally

```bash
npx checkly test
```

### Deploy checks to Checkly

```bash
npx checkly deploy
```

## Failure Demos

Want to intentionally break checks to show why each monitor type matters? See [scripts/FAILURE-DEMOS.md](scripts/FAILURE-DEMOS.md).
