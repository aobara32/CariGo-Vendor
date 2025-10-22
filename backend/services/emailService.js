const sgMail = require('@sendgrid/mail');

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Set EU data residency if using EU subuser
if (process.env.SENDGRID_EU_DATA_RESIDENCY === 'true') {
  sgMail.setDataResidency('eu');
}

class EmailService {
  constructor() {
    this.fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@carigo.com';
    this.fromName = process.env.SENDGRID_FROM_NAME || 'CariGo Support';
  }

  /**
   * Send contact form confirmation email
   */
  async sendContactConfirmation(contactData) {
    const msg = {
      to: contactData.email,
      from: {
        email: this.fromEmail,
        name: this.fromName
      },
      subject: 'お問い合わせありがとうございます - Thank You for Contacting CariGo',
      html: this.generateContactConfirmationHTML(contactData),
      text: this.generateContactConfirmationText(contactData)
    };

    try {
      await sgMail.send(msg);
      console.log('Contact confirmation email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Error sending contact confirmation email:', error);
      throw new Error('Failed to send contact confirmation email');
    }
  }

  /**
   * Send donation form confirmation email
   */
  async sendDonationConfirmation(donationData) {
    const msg = {
      to: donationData.email,
      from: {
        email: this.fromEmail,
        name: this.fromName
      },
      subject: '寄付ありがとうございます - Thank You for Your Donation',
      html: this.generateDonationConfirmationHTML(donationData),
      text: this.generateDonationConfirmationText(donationData)
    };

    try {
      await sgMail.send(msg);
      console.log('Donation confirmation email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Error sending donation confirmation email:', error);
      throw new Error('Failed to send donation confirmation email');
    }
  }

  /**
   * Send investment form confirmation email
   */
  async sendInvestmentConfirmation(investmentData) {
    const msg = {
      to: investmentData.email,
      from: {
        email: this.fromEmail,
        name: this.fromName
      },
      subject: '投資お申し込みありがとうございます - Thank You for Your Investment Interest',
      html: this.generateInvestmentConfirmationHTML(investmentData),
      text: this.generateInvestmentConfirmationText(investmentData)
    };

    try {
      await sgMail.send(msg);
      console.log('Investment confirmation email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Error sending investment confirmation email:', error);
      throw new Error('Failed to send investment confirmation email');
    }
  }

  /**
   * Send application form confirmation email
   */
  async sendApplicationConfirmation(applicationData) {
    const msg = {
      to: applicationData.email,
      from: {
        email: this.fromEmail,
        name: this.fromName
      },
      subject: 'アプリケーション受け付け完了 - Application Received - CariGo',
      html: this.generateApplicationConfirmationHTML(applicationData),
      text: this.generateApplicationConfirmationText(applicationData)
    };

    try {
      await sgMail.send(msg);
      console.log('Application confirmation email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Error sending application confirmation email:', error);
      throw new Error('Failed to send application confirmation email');
    }
  }

  /**
   * Send internal notification to admin
   */
  async sendInternalNotification(formType, formData) {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@carigo.com';
    
    const msg = {
      to: adminEmail,
      from: {
        email: this.fromEmail,
        name: this.fromName
      },
      subject: `New ${formType} Form Submission - CariGo`,
      html: this.generateInternalNotificationHTML(formType, formData),
      text: this.generateInternalNotificationText(formType, formData)
    };

    try {
      await sgMail.send(msg);
      console.log(`Internal notification sent for ${formType} form`);
      return { success: true };
    } catch (error) {
      console.error(`Error sending internal notification for ${formType}:`, error);
      // Don't throw error for internal notifications to avoid affecting user experience
      return { success: false, error: error.message };
    }
  }

  // HTML Template Generators
  generateApplicationConfirmationHTML(data) {
    const businessTypeLabels = {
      'individual': '個人事業主',
      'partnership': 'パートナーシップ',
      'corporation': '法人',
      'other': 'その他'
    };

    const revenueLabels = {
      'under-10k': '10,000B$未満',
      '10k-50k': '10,000B$ - 50,000B$',
      '50k-100k': '50,000B$ - 100,000B$',
      '100k-500k': '100,000B$ - 500,000B$',
      '500k-1m': '500,000B$ - 1,000,000B$',
      'over-1m': '1,000,000B$以上'
    };

    const salesLabels = {
      'under-1k': '1,000B$未満',
      '1k-5k': '1,000B$ - 5,000B$',
      '5k-10k': '5,000B$ - 10,000B$',
      '10k-25k': '10,000B$ - 25,000B$',
      '25k-50k': '25,000B$ - 50,000B$',
      'over-50k': '50,000B$以上'
    };

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 700px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 30px; background: #f9fafb; border-radius: 0 0 8px 8px; }
          .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .section { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #2563eb; }
          .section h3 { color: #2563eb; margin-top: 0; }
          .info-row { display: flex; margin: 8px 0; }
          .info-label { font-weight: bold; min-width: 150px; color: #555; }
          .info-value { flex: 1; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0; }
          .next-steps { background: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; }
          .next-steps h3 { color: #10b981; margin-top: 0; }
          .next-steps ul { margin: 10px 0; }
          .next-steps li { margin: 8px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 CariGo アプリケーション受け付け完了</h1>
            <p>Application Received Successfully</p>
          </div>
          
          <div class="content">
            <p><strong>${data.name}</strong> 様</p>
            <p>この度は、CariGoへのアプリケーションをご提出いただき、誠にありがとうございます。</p>
            
            <div class="highlight">
              <h3>📋 アプリケーション詳細</h3>
              <p><strong>申請日時:</strong> ${new Date().toLocaleString('ja-JP')}</p>
              <p><strong>申請者:</strong> ${data.name}</p>
              <p><strong>事業名:</strong> ${data.businessName}</p>
            </div>

            <div class="section">
              <h3>👤 個人情報</h3>
              <div class="info-row">
                <div class="info-label">お名前:</div>
                <div class="info-value">${data.name}</div>
              </div>
              <div class="info-row">
                <div class="info-label">メールアドレス:</div>
                <div class="info-value">${data.email}</div>
              </div>
              <div class="info-row">
                <div class="info-label">電話番号:</div>
                <div class="info-value">${data.phone}</div>
              </div>
            </div>

            <div class="section">
              <h3>🏢 事業情報</h3>
              <div class="info-row">
                <div class="info-label">事業名:</div>
                <div class="info-value">${data.businessName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">事業形態:</div>
                <div class="info-value">${businessTypeLabels[data.businessType]}</div>
              </div>
              <div class="info-row">
                <div class="info-label">業界:</div>
                <div class="info-value">${data.industry}</div>
              </div>
              <div class="info-row">
                <div class="info-label">事業年数:</div>
                <div class="info-value">${data.yearsInBusiness}年</div>
              </div>
              <div class="info-row">
                <div class="info-label">従業員数:</div>
                <div class="info-value">${data.numberOfEmployees}名</div>
              </div>
              <div class="info-row">
                <div class="info-label">年間売上:</div>
                <div class="info-value">${revenueLabels[data.annualRevenue]}</div>
              </div>
              ${data.businessRegistration ? `
              <div class="info-row">
                <div class="info-label">事業登録番号:</div>
                <div class="info-value">${data.businessRegistration}</div>
              </div>
              ` : ''}
              <div class="info-row">
                <div class="info-label">事業所住所:</div>
                <div class="info-value">${data.businessAddress}</div>
              </div>
            </div>

            <div class="section">
              <h3>📦 商品情報</h3>
              <div class="info-row">
                <div class="info-label">商品カテゴリ:</div>
                <div class="info-value">${data.productCategories.join(', ')}</div>
              </div>
              <div class="info-row">
                <div class="info-label">月間売上予想:</div>
                <div class="info-value">${salesLabels[data.estimatedMonthlySales]}</div>
              </div>
              <div class="info-row">
                <div class="info-label">既存在庫:</div>
                <div class="info-value">${data.hasExistingInventory ? 'あり' : 'なし'}</div>
              </div>
            </div>

            <div class="section">
              <h3>💻 プラットフォーム経験</h3>
              <div class="info-row">
                <div class="info-label">EC経験:</div>
                <div class="info-value">${data.previousEcommerceExperience ? 'あり' : 'なし'}</div>
              </div>
              ${data.platformsUsed && data.platformsUsed.length > 0 ? `
              <div class="info-row">
                <div class="info-label">使用プラットフォーム:</div>
                <div class="info-value">${data.platformsUsed.join(', ')}</div>
              </div>
              ` : ''}
              ${data.marketingChannels && data.marketingChannels.length > 0 ? `
              <div class="info-row">
                <div class="info-label">マーケティングチャネル:</div>
                <div class="info-value">${data.marketingChannels.join(', ')}</div>
              </div>
              ` : ''}
            </div>

            ${data.specialRequirements ? `
            <div class="section">
              <h3>📝 特別要件</h3>
              <p>${data.specialRequirements.replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}

            <div class="next-steps">
              <h3>🚀 次のステップ</h3>
              <p>アプリケーションを審査いたします。審査プロセスは以下の通りです：</p>
              <ul>
                <li><strong>1-2営業日:</strong> 書類審査と初回確認</li>
                <li><strong>3-5営業日:</strong> 追加書類の要求（必要な場合）</li>
                <li><strong>5-7営業日:</strong> 審査結果の通知</li>
              </ul>
              <p><strong>審査期間中:</strong> ご質問がございましたら、いつでもお気軽にお問い合わせください。</p>
            </div>

            <div class="highlight">
              <h3>📞 サポート情報</h3>
              <p><strong>Email:</strong> applications@carigo.com</p>
              <p><strong>Phone:</strong> +673 212 3456</p>
              <p><strong>営業時間:</strong> 月曜日〜金曜日 9:00-18:00 (ブルネイ時間)</p>
            </div>
          </div>
          
          <div class="footer">
            <p>CariGo Merchant Team<br>
            Email: applications@carigo.com | Phone: +673 212 3456</p>
            <p>このメールは自動送信されています。返信はできません。</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateContactConfirmationHTML(data) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .form-data { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>CariGo - お問い合わせ確認</h1>
          </div>
          <div class="content">
            <p>お問い合わせいただき、ありがとうございます。</p>
            <p>以下の内容でお問い合わせを受け付けました：</p>
            
            <div class="form-data">
              <h3>お問い合わせ内容</h3>
              <p><strong>お名前:</strong> ${data.name}</p>
              <p><strong>メールアドレス:</strong> ${data.email}</p>
              <p><strong>電話番号:</strong> ${data.phone || '未記入'}</p>
              <p><strong>お問い合わせ種別:</strong> ${data.subject}</p>
              <p><strong>メッセージ:</strong></p>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p>通常、2営業日以内にご返信いたします。</p>
            <p>ご不明な点がございましたら、お気軽にお問い合わせください。</p>
          </div>
          <div class="footer">
            <p>CariGo Team<br>
            Email: support@carigo.com | Phone: +673 212 3456</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateDonationConfirmationHTML(data) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #059669; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f0fdf4; }
          .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .form-data { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
          .amount { font-size: 24px; font-weight: bold; color: #059669; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>CariGo - 寄付確認</h1>
          </div>
          <div class="content">
            <p>ご寄付いただき、誠にありがとうございます。</p>
            <p>以下の内容で寄付のお申し込みを受け付けました：</p>
            
            <div class="form-data">
              <h3>寄付詳細</h3>
              <p><strong>お名前:</strong> ${data.name}</p>
              <p><strong>メールアドレス:</strong> ${data.email}</p>
              <p><strong>寄付金額:</strong> <span class="amount">${data.amount} B$</span></p>
              <p><strong>寄付目的:</strong> ${data.purpose}</p>
              <p><strong>匿名希望:</strong> ${data.anonymous ? 'はい' : 'いいえ'}</p>
              ${data.message ? `<p><strong>メッセージ:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
            </div>
            
            <p>寄付の処理について、後日詳細をご連絡いたします。</p>
            <p>ご協力いただき、ありがとうございます。</p>
          </div>
          <div class="footer">
            <p>CariGo Team<br>
            Email: donations@carigo.com | Phone: +673 212 3456</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateInvestmentConfirmationHTML(data) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #7c3aed; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #faf5ff; }
          .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .form-data { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>CariGo - 投資お申し込み確認</h1>
          </div>
          <div class="content">
            <p>投資へのご関心をお寄せいただき、ありがとうございます。</p>
            <p>以下の内容で投資のお申し込みを受け付けました：</p>
            
            <div class="form-data">
              <h3>投資申し込み詳細</h3>
              <p><strong>お名前:</strong> ${data.name}</p>
              <p><strong>会社名:</strong> ${data.company || '個人'}</p>
              <p><strong>メールアドレス:</strong> ${data.email}</p>
              <p><strong>電話番号:</strong> ${data.phone}</p>
              <p><strong>投資金額:</strong> ${data.amount} B$</p>
              <p><strong>投資タイプ:</strong> ${data.type}</p>
              <p><strong>経験:</strong> ${data.experience}</p>
              <p><strong>メッセージ:</strong></p>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p>投資チームから3営業日以内にご連絡いたします。</p>
            <p>ご質問がございましたら、お気軽にお問い合わせください。</p>
          </div>
          <div class="footer">
            <p>CariGo Investment Team<br>
            Email: investment@carigo.com | Phone: +673 212 3456</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateInternalNotificationHTML(formType, data) {
    const typeLabels = {
      contact: 'お問い合わせ',
      donation: '寄付',
      investment: '投資'
    };

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #fef2f2; }
          .form-data { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>新しい${typeLabels[formType]}フォーム送信</h1>
          </div>
          <div class="content">
            <p>新しい${typeLabels[formType]}フォームが送信されました。</p>
            
            <div class="form-data">
              <h3>送信内容</h3>
              ${Object.entries(data).map(([key, value]) => 
                `<p><strong>${key}:</strong> ${typeof value === 'object' ? JSON.stringify(value) : value}</p>`
              ).join('')}
            </div>
            
            <p>送信日時: ${new Date().toLocaleString('ja-JP')}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Text Template Generators
  generateApplicationConfirmationText(data) {
    const businessTypeLabels = {
      'individual': '個人事業主',
      'partnership': 'パートナーシップ',
      'corporation': '法人',
      'other': 'その他'
    };

    const revenueLabels = {
      'under-10k': '10,000B$未満',
      '10k-50k': '10,000B$ - 50,000B$',
      '50k-100k': '50,000B$ - 100,000B$',
      '100k-500k': '100,000B$ - 500,000B$',
      '500k-1m': '500,000B$ - 1,000,000B$',
      'over-1m': '1,000,000B$以上'
    };

    const salesLabels = {
      'under-1k': '1,000B$未満',
      '1k-5k': '1,000B$ - 5,000B$',
      '5k-10k': '5,000B$ - 10,000B$',
      '10k-25k': '10,000B$ - 25,000B$',
      '25k-50k': '25,000B$ - 50,000B$',
      'over-50k': '50,000B$以上'
    };

    return `
CariGo アプリケーション受け付け完了
Application Received Successfully

${data.name} 様

この度は、CariGoへのアプリケーションをご提出いただき、誠にありがとうございます。

【アプリケーション詳細】
申請日時: ${new Date().toLocaleString('ja-JP')}
申請者: ${data.name}
事業名: ${data.businessName}

【個人情報】
お名前: ${data.name}
メールアドレス: ${data.email}
電話番号: ${data.phone}

【事業情報】
事業名: ${data.businessName}
事業形態: ${businessTypeLabels[data.businessType]}
業界: ${data.industry}
事業年数: ${data.yearsInBusiness}年
従業員数: ${data.numberOfEmployees}名
年間売上: ${revenueLabels[data.annualRevenue]}
${data.businessRegistration ? `事業登録番号: ${data.businessRegistration}` : ''}
事業所住所: ${data.businessAddress}

【商品情報】
商品カテゴリ: ${data.productCategories.join(', ')}
月間売上予想: ${salesLabels[data.estimatedMonthlySales]}
既存在庫: ${data.hasExistingInventory ? 'あり' : 'なし'}

【プラットフォーム経験】
EC経験: ${data.previousEcommerceExperience ? 'あり' : 'なし'}
${data.platformsUsed && data.platformsUsed.length > 0 ? `使用プラットフォーム: ${data.platformsUsed.join(', ')}` : ''}
${data.marketingChannels && data.marketingChannels.length > 0 ? `マーケティングチャネル: ${data.marketingChannels.join(', ')}` : ''}

${data.specialRequirements ? `【特別要件】\n${data.specialRequirements}` : ''}

【次のステップ】
アプリケーションを審査いたします。審査プロセスは以下の通りです：
1-2営業日: 書類審査と初回確認
3-5営業日: 追加書類の要求（必要な場合）
5-7営業日: 審査結果の通知

審査期間中、ご質問がございましたら、いつでもお気軽にお問い合わせください。

【サポート情報】
Email: applications@carigo.com
Phone: +673 212 3456
営業時間: 月曜日〜金曜日 9:00-18:00 (ブルネイ時間)

CariGo Merchant Team
Email: applications@carigo.com | Phone: +673 212 3456

このメールは自動送信されています。返信はできません。
    `.trim();
  }

  generateContactConfirmationText(data) {
    return `
CariGo - お問い合わせ確認

お問い合わせいただき、ありがとうございます。

以下の内容でお問い合わせを受け付けました：

お名前: ${data.name}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未記入'}
お問い合わせ種別: ${data.subject}
メッセージ:
${data.message}

通常、2営業日以内にご返信いたします。

CariGo Team
Email: support@carigo.com | Phone: +673 212 3456
    `.trim();
  }

  generateDonationConfirmationText(data) {
    return `
CariGo - 寄付確認

ご寄付いただき、誠にありがとうございます。

寄付詳細:
お名前: ${data.name}
メールアドレス: ${data.email}
寄付金額: ${data.amount} B$
寄付目的: ${data.purpose}
匿名希望: ${data.anonymous ? 'はい' : 'いいえ'}
${data.message ? `メッセージ:\n${data.message}` : ''}

寄付の処理について、後日詳細をご連絡いたします。

CariGo Team
Email: donations@carigo.com | Phone: +673 212 3456
    `.trim();
  }

  generateInvestmentConfirmationText(data) {
    return `
CariGo - 投資お申し込み確認

投資へのご関心をお寄せいただき、ありがとうございます。

投資申し込み詳細:
お名前: ${data.name}
会社名: ${data.company || '個人'}
メールアドレス: ${data.email}
電話番号: ${data.phone}
投資金額: ${data.amount} B$
投資タイプ: ${data.type}
経験: ${data.experience}
メッセージ:
${data.message}

投資チームから3営業日以内にご連絡いたします。

CariGo Investment Team
Email: investment@carigo.com | Phone: +673 212 3456
    `.trim();
  }

  generateInternalNotificationText(formType, data) {
    const typeLabels = {
      contact: 'お問い合わせ',
      donation: '寄付',
      investment: '投資'
    };

    return `
新しい${typeLabels[formType]}フォーム送信

送信日時: ${new Date().toLocaleString('ja-JP')}

送信内容:
${Object.entries(data).map(([key, value]) => 
  `${key}: ${typeof value === 'object' ? JSON.stringify(value) : value}`
).join('\n')}
    `.trim();
  }
}

module.exports = new EmailService();
