export function openEnterpriseEmail() {
  const email = 'team@turiyatree.com';
  const subject = encodeURIComponent('Get me more details on Enterprise Plan');
  const body = encodeURIComponent(`Dear Team,

I hope this email finds you well. I am interested in learning more about the Enterprise Plan for your app. Could you please provide me with detailed information, including features, pricing, and any customization options available?

Looking forward to your response.

Best regards,
[Your Name]
[Your Contact Information]`);

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}