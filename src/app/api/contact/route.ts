import { NextRequest, NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import 'dotenv/config';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phoneNumber, 
      companyName, 
      jobTitle, 
      message 
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !companyName || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email parameters
    const sentFrom = new Sender(
      process.env.MAILERSEND_FROM_EMAIL || 'noreply@sbmtechpro.com',
      'SBM Tech Contact Form'
    );

    const recipients = [
      new Recipient(
        process.env.MAILERSEND_TO_EMAIL || 'abdulrafay1747@gmail.com',
        'SBM Tech Team'
      )
    ];

    const replyToRecipient = new Recipient(email, `${firstName} ${lastName}`);

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(replyToRecipient)
      .setSubject(`New Contact Inquiry from ${firstName} ${lastName}`)
      .setHtml(`
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          
          <!-- Header -->
          <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #1e293b; font-size: 24px; font-weight: 600; margin: 0;">New Contact Inquiry</h1>
            <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">SBM Tech Contact Form</p>
          </div>
          
          <!-- Contact Details -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #334155; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1e293b;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Email:</td>
                <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></td>
              </tr>
              ${phoneNumber ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Phone:</td>
                <td style="padding: 8px 0; color: #1e293b;">${phoneNumber}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Company:</td>
                <td style="padding: 8px 0; color: #1e293b;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Job Title:</td>
                <td style="padding: 8px 0; color: #1e293b;">${jobTitle}</td>
              </tr>
            </table>
          </div>
          
          <!-- Message Section -->
          ${message ? `
          <div style="margin-bottom: 30px;">
            <h2 style="color: #334155; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">Message</h2>
            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 16px; border-radius: 4px;">
              <p style="color: #1e293b; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          ` : ''}
          
          <!-- Footer -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            <p style="color: #64748b; font-size: 12px; margin: 0; text-align: center;">
              This email was automatically generated from the SBM Tech contact form.<br>
              Please respond directly to this email to contact the sender.
            </p>
          </div>
          
        </div>
      `)
      .setText(`
        New Contact Inquiry - SBM Tech
        
        Contact Details:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber || 'Not provided'}
        Company: ${companyName}
        Job Title: ${jobTitle}
        
        ${message ? `Message:\n${message}` : 'No message provided'}
        
        ---
        This email was sent from the SBM Tech contact form.
      `);

    // Send email
    await mailerSend.email.send(emailParams);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 