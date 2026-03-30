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

Create a `.env` file in the project root with your Checkly OTel API key:

```
CHECKLY_OTEL_API_KEY=<your-checkly-otel-api-key>
CX_API_KEY=<your-coralogix-api-key>
CX_DOMAIN=<your-coralogix-domain>
```

`CX_DOMAIN` is your Coralogix region domain (e.g. `coralogix.us`, `coralogix.com`, `eu2.coralogix.com`, `coralogix.in`, `coralogixsg.com`).

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
