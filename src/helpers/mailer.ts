import nodemailer from 'nodemailer';
import User from '@/models/userModels';
import bcrypt from 'bcryptjs';

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        //create a hash token 
        const hashedToken = await bcrypt.hash(userId.toString(), 10);

        if (emailType == "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 });
        } else if (emailType == "RESET") {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 });
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "027c51a8f5ec18",
                pass: "002fdd66a60c5f"
            }
        });
        const mailOptions = {
            from: 'amityadav010213@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail? token=${hashedToken}</p>`
        };
        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
