import { NextRequest, NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import 'dotenv/config';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

interface QuoteItem {
  service: string;
  description: string;
  type: 'monthly' | 'one-time';
  price: number;
  quantity?: number;
}

interface QuoteData {
  name: string;
  email: string;
  company: string;
  items: QuoteItem[];
  monthlyCost: number;
  oneTimeCost: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name,
      email,
      company,
      items,
      monthlyCost,
      oneTimeCost
    }: QuoteData = body;

    // Validate required fields
    if (!name || !email || !company || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email parameters
    const sentFrom = new Sender(
      process.env.MAILERSEND_FROM_EMAIL || 'noreply@sbmtechpro.com',
      'SBM Tech Security Solutions'
    );

    const recipients = [
      new Recipient(email, name)
    ];

    const bccRecipients = [
      new Recipient(
        process.env.MAILERSEND_TO_EMAIL || 'abdulrafay1747@gmail.com',
        'SBM Tech Team'
      )
    ];

    // Generate table rows for services
    const monthlyItems = items.filter(item => item.type === 'monthly');
    const oneTimeItems = items.filter(item => item.type === 'one-time');

    const generateTableRows = (serviceItems: QuoteItem[]) => {
      return serviceItems.map(item => `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 12px; color: #1e293b; font-weight: 500;">${item.service}</td>
          <td style="padding: 12px; color: #64748b;">${item.description}</td>
          <td style="padding: 12px; text-align: center; color: #1e293b;">${item.quantity || 1}</td>
          <td style="padding: 12px; text-align: right; color: #059669; font-weight: 600;">$${item.price.toLocaleString()}</td>
        </tr>
      `).join('');
    };

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setBcc(bccRecipients)
      .setSubject(`Your SBM Tech Security Plan Quote - ${company}`)
      .setHtml(`
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
            <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700;">Security Plan Quote</h1>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Comprehensive cybersecurity solutions tailored for ${company}</p>
          </div>
          
          <!-- Customer Details -->
          <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
            <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 15px 0;">Quote Details</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <strong style="color: #374151;">Customer:</strong> ${name}<br>
                <strong style="color: #374151;">Company:</strong> ${company}<br>
                <strong style="color: #374151;">Email:</strong> ${email}
              </div>
              <div>
                <strong style="color: #374151;">Quote Date:</strong> ${new Date().toLocaleDateString()}<br>
                <strong style="color: #374151;">Valid Until:</strong> ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </div>
            </div>
          </div>

          ${monthlyItems.length > 0 ? `
          <!-- Monthly Services -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 15px 0;">Monthly Services</h2>
            <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
              <thead>
                <tr style="background-color: #f1f5f9;">
                  <th style="padding: 15px; text-align: left; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">Service</th>
                  <th style="padding: 15px; text-align: left; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">Description</th>
                  <th style="padding: 15px; text-align: center; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">Qty</th>
                  <th style="padding: 15px; text-align: right; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">Monthly Price</th>
                </tr>
              </thead>
              <tbody>
                ${generateTableRows(monthlyItems)}
                <tr style="background-color: #f8fafc;">
                  <td colspan="3" style="padding: 15px; font-weight: 600; color: #1e293b;">Total Monthly Cost</td>
                  <td style="padding: 15px; text-align: right; font-weight: 700; color: #059669; font-size: 18px;">$${monthlyCost.toLocaleString()}/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          ` : ''}

          ${oneTimeItems.length > 0 ? `
          <!-- One-time Services -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 15px 0;">One-time Services</h2>
            <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
              <thead>
                <tr style="background-color: #f1f5f9;">
                  <th style="padding: 15px; text-align: left; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">Service</th>
                  <th style="padding: 15px; text-align: left; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">Description</th>
                  <th style="padding: 15px; text-align: center; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">Qty</th>
                  <th style="padding: 15px; text-align: right; color: #374151; font-weight: 600; border-bottom: 2px solid #e2e8f0;">One-time Price</th>
                </tr>
              </thead>
              <tbody>
                ${generateTableRows(oneTimeItems)}
                <tr style="background-color: #f8fafc;">
                  <td colspan="3" style="padding: 15px; font-weight: 600; color: #1e293b;">Total One-time Cost</td>
                  <td style="padding: 15px; text-align: right; font-weight: 700; color: #dc2626; font-size: 18px;">$${oneTimeCost.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
          ` : ''}

          <!-- Summary -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">Investment Summary</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: center;">
              <div>
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 5px;">Monthly Investment</div>
                <div style="font-size: 32px; font-weight: 700;">$${monthlyCost.toLocaleString()}</div>
                <div style="font-size: 12px; opacity: 0.8;">per month</div>
              </div>
              <div>
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 5px;">One-time Investment</div>
                <div style="font-size: 32px; font-weight: 700;">$${oneTimeCost.toLocaleString()}</div>
                <div style="font-size: 12px; opacity: 0.8;">implementation</div>
              </div>
            </div>
          </div>

          <!-- Benefits -->
          <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
            <h3 style="color: #15803d; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Your Plan Includes:</h3>
            <ul style="color: #166534; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li>2-year price lock guarantee</li>
              <li>No upfront implementation costs</li>
              <li>No long-term contracts required</li>
              <li>24/7 security monitoring and support</li>
              <li>Regular security assessments and updates</li>
            </ul>
          </div>

          <!-- Call to Action -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0;">Ready to Secure Your Business?</h3>
            <p style="color: #64748b; margin: 0 0 20px 0;">Our cybersecurity experts are ready to discuss your security needs and customize this plan for your organization.</p>
            <a href="mailto:${process.env.MAILERSEND_TO_EMAIL || 'abdulrafay1747@gmail.com'}?subject=Security Plan Quote Discussion - ${company}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 10px 10px 0;">Schedule Consultation</a>
            <a href="tel:+1234567890" style="display: inline-block; background-color: #059669; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 10px 10px 0;">Call Us Now</a>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
              <strong>SBM Tech Professional Services</strong><br>
              Cybersecurity • Compliance • Risk Management
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              This quote is valid for 30 days from the date issued. Prices may vary based on final requirements and customization needs.<br>
              Contact us to discuss your specific security requirements and get a personalized consultation.
            </p>
          </div>
          
        </div>
      `)
      .setText(`
        SBM Tech Security Plan Quote for ${company}
        
        Customer: ${name}
        Email: ${email}
        Company: ${company}
        Quote Date: ${new Date().toLocaleDateString()}
        
        ${monthlyItems.length > 0 ? `
        MONTHLY SERVICES:
        ${monthlyItems.map(item => `- ${item.service}: ${item.description} - $${item.price.toLocaleString()}/month`).join('\n')}
        
        Total Monthly Cost: $${monthlyCost.toLocaleString()}/month
        ` : ''}
        
        ${oneTimeItems.length > 0 ? `
        ONE-TIME SERVICES:
        ${oneTimeItems.map(item => `- ${item.service}: ${item.description} - $${item.price.toLocaleString()}`).join('\n')}
        
        Total One-time Cost: $${oneTimeCost.toLocaleString()}
        ` : ''}
        
        INVESTMENT SUMMARY:
        Monthly Investment: $${monthlyCost.toLocaleString()}/month
        One-time Investment: $${oneTimeCost.toLocaleString()}
        
        Your plan includes:
        - 2-year price lock guarantee
        - No upfront implementation costs
        - No long-term contracts required
        - 24/7 security monitoring and support
        - Regular security assessments and updates
        
        Contact us to discuss your security needs:
        Email: ${process.env.MAILERSEND_TO_EMAIL || 'abdulrafay1747@gmail.com'}
        
        This quote is valid for 30 days from the date issued.
        
        ---
        SBM Tech Professional Services
        Cybersecurity • Compliance • Risk Management
      `);

    // Send email
    await mailerSend.email.send(emailParams);

    return NextResponse.json(
      { success: true, message: 'Quote sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json(
      { error: 'Failed to send quote email' },
      { status: 500 }
    );
  }
} 