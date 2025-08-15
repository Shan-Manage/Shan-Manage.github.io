const QRCode = require('qrcode');

async function generateQR() {
  const invitationURL = 'https://shan-manage.github.io/';

  try {
    await QRCode.toFile('invitation.png', invitationURL, {
      color: {
        dark: '#000',  // QR dots
        light: '#fff'  // background
      },
      width: 300
    });
    console.log('✅ QR code generated: invitation.png');
  } catch (err) {
    console.error('❌ Error generating QR code:', err);
  }
}

generateQR();
