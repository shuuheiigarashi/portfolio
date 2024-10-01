export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req:any) {
    const { name, email, content } = await req.json();
  
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error("Webhook URL is not defined");
        return;
      }
    const payload = {
      text: `新しい問い合わせがありました:\n名前: ${name}\nメール: ${email}\n内容: ${content}`,
    };


  
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) {
      return new Response('Failed to send message to Slack', { status: 500 });
    }
  
    return new Response('Message sent to Slack', { status: 200 });
  }
  