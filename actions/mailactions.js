'use server';

import nodemailer from "nodemailer";

export async function sendDemoEmail(formData) {

  const data = Object.fromEntries(formData);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">

      <div style="background-color: #052920; padding: 40px; text-align: left; border-bottom: 4px solid #E8A020;">
        <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.12em; color: #E8A020; text-transform: uppercase; margin-bottom: 8px;">Zenthlab</div>
        <div style="font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em; margin: 0;">New Demo Request</div>
      </div>

      <div style="padding: 40px;">
        <p style="font-size: 15px; color: #555555; line-height: 1.6; margin-top: 0; margin-bottom: 32px;">
          A new prospect has submitted a demo request. Here are the details for <strong>${data.business}</strong>.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 36px;">
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #eeeeee; width: 50%; vertical-align: top;">
              <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #888888; margin-bottom: 6px;">Name</div>
              <div style="font-size: 16px; font-weight: 600; color: #111111;">${data.name}</div>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #eeeeee; width: 50%; vertical-align: top;">
              <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #888888; margin-bottom: 6px;">Role</div>
              <div style="font-size: 16px; font-weight: 600; color: #111111;">${data.role}</div>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #eeeeee; vertical-align: top;">
              <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #888888; margin-bottom: 6px;">Email</div>
              <div style="font-size: 16px; font-weight: 600; color: #111111;">
                <a href="mailto:${data.email}" style="color: #0D5C4A; text-decoration: none;">${data.email}</a>
              </div>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #eeeeee; vertical-align: top;">
              <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #888888; margin-bottom: 6px;">Phone</div>
              <div style="font-size: 16px; font-weight: 600; color: #111111;">${data.phone || "Not provided"}</div>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 16px 0; border-bottom: 1px solid #eeeeee; vertical-align: top;">
              <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #888888; margin-bottom: 6px;">Interest / Topic</div>
              <div style="font-size: 16px; font-weight: 600; color: #111111;">${data.topic}</div>
            </td>
          </tr>
        </table>

        <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #888888; margin-bottom: 12px;">Problem / Solution Sought</div>
        <div style="background-color: #f8fafc; border-left: 4px solid #E8A020; padding: 24px; border-radius: 0 8px 8px 0;">
          <p style="font-size: 15px; color: #333333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>

      </div>

      <div style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #eeeeee;">
        <div style="font-size: 12px; color: #94a3b8;">
          This secure notification was routed through the Zenthlab platform.
        </div>
      </div>

    </div>
  </div>
  `;

  await transporter.sendMail({
    from: `"Zenthlab Demo" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `🚀 New Demo Request — ${data.business}`,
    html,
  });

  return { success: true };
}