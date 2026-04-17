import { EmailAlertChannel, WebhookAlertChannel } from 'checkly/constructs'

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'shawn@checklyhq.com',
  sendFailure: true,
  sendRecovery: true,
})


export const slackChannel = new WebhookAlertChannel('slack-channel-1', {
  name: 'Slack #ops-alerts',
  method: 'POST',
  url: process.env.SLACK_WEBHOOK!,
  sendFailure: true,
  sendRecovery: true,
  template: `{
    "text": "{{ALERT_TITLE}}",
    "blocks": [
      {
        "type": "header",
        "text": { "type": "plain_text", "text": "{{ALERT_TITLE}}" }
      },
      {
        "type": "section",
        "fields": [
          { "type": "mrkdwn", "text": "*Check:*\\n{{CHECK_NAME}}" },
          { "type": "mrkdwn", "text": "*Description:*\\n{{CHECK_DESCRIPTION}}" },
          { "type": "mrkdwn", "text": "*Status:*\\n{{ALERT_TYPE}}" },
          { "type": "mrkdwn", "text": "*Time of incident:*\\n{{STARTED_AT}}" },
          { "type": "mrkdwn", "text": "*Location:*\\n{{RUN_LOCATION}}" }
        ]
      }{{#if AI_ANALYSIS_ROOT_CAUSE}},
      {
        "type": "section",
        "text": { "type": "mrkdwn", "text": "*Rocky AI — Root cause:*\\n{{AI_ANALYSIS_ROOT_CAUSE}}" }
      }{{/if}}{{#if AI_ANALYSIS_USER_IMPACT}},
      {
        "type": "section",
        "text": { "type": "mrkdwn", "text": "*User impact:*\\n{{AI_ANALYSIS_USER_IMPACT}}" }
      }{{/if}}{{#if AI_ANALYSIS_LINK}},
      {
        "type": "section",
        "text": { "type": "mrkdwn", "text": "<{{AI_ANALYSIS_LINK}}|View Rocky AI analysis>" }
      }{{/if}},
      {
        "type": "section",
        "text": { "type": "mrkdwn", "text": "<{{RESULT_LINK}}|View check result>" }
      }
    ]
  }`,
})

// Scalable option: extract the template into a shared constant (or its own
// file) so every Slack alert channel renders the same payload format. Update
// the shared template once and every consuming channel picks up the change.
//
// const slackTemplate = `{
//   "text": "{{ALERT_TITLE}}",
//   "blocks": [ ... same blocks as above ... ]
// }`
//
// export const slackChannel = new WebhookAlertChannel('slack-channel-1', {
//   name: 'Slack #ops-alerts',
//   method: 'POST',
//   url: process.env.SLACK_WEBHOOK!,
//   sendFailure: true,
//   sendRecovery: true,
//   template: slackTemplate,
// })
//
// export const slackChannelSecurity = new WebhookAlertChannel('slack-channel-security', {
//   name: 'Slack #security-alerts',
//   method: 'POST',
//   url: process.env.SLACK_WEBHOOK_SECURITY!,
//   sendFailure: true,
//   sendRecovery: true,
//   template: slackTemplate, // same shared format
// })
