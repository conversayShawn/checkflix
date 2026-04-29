const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { resourceFromAttributes } = require('@opentelemetry/resources');
require('dotenv').config({ path: 'src/.env', override: true });

const checklyExporter = new OTLPTraceExporter({
  url: 'https://otel.eu-west-1.checklyhq.com/v1/traces',
  headers: {
    'Authorization': `Bearer ${process.env.CHECKLY_OTEL_API_KEY}`
  },
});

const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    'cx.application.name': 'shawn-checkflix',
    'cx.subsystem.name': 'checkflix-api',
    'service.name': 'checkflix-api',
  }),
  spanProcessors: [new BatchSpanProcessor(checklyExporter)],
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start();
