const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
require('dotenv').config({ path: 'src/.env', override: true });

// Checkly exporter
const checklyExporter = new OTLPTraceExporter({
  url: 'https://otel.eu-west-1.checklyhq.com/v1/traces',
  headers: {
    'Authorization': `Bearer ${process.env.CHECKLY_OTEL_API_KEY}`
  },
});

// Coralogix exporter
const coralogixExporter = new OTLPTraceExporter({
  url: `https://ingress.${process.env.CX_DOMAIN}/v1/traces`,
  headers: {
    'Authorization': `Bearer ${process.env.CX_API_KEY}`
  },
});

const sdk = new NodeSDK({
  spanProcessors: [
    new BatchSpanProcessor(checklyExporter),
    new BatchSpanProcessor(coralogixExporter),
  ],
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start();
