
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, phone, subject, message } = await req.json();

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAILUSER,
                pass: process.env.GMAILPASSWORD,
            },
        });

        const htmlContent = `
    <div class="email-container">
      <div class="header">
        <h1>Nova Mensagem de Contato</h1>
      </div>
      <div class="content">
        <p><span class="label">Nome:</span> ${name}</p>
        <p><span class="label">Email:</span> ${email}</p>
        <p><span class="label">Telefone:</span> ${phone}</p>
        <p><span class="label">Mensagem:</span></p>
        <p>${message}</p>
      </div>
      <div class="footer">
        <p>&copy; 2025 Seu Portfólio - Todos os direitos reservados.</p>
      </div>
    </div>
  `;
        let mailOptions = {
            from: process.env.GMAILUSER,
            to: 'ekonuma12@gmail.com',
            cc: email,
            subject: subject,
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'E-mail enviado com sucesso!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return new Response(JSON.stringify({ error: 'Erro ao enviar e-mail.' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
