import nodemailer from "nodemailer"

export default async function handler(req: any, res: any) {
  const { recipientEmail, otp } = req.body
  if (!otp) {
    return res.status(400).json({ error: "OTP is missing or undefined" })
  }
  const OTPString = otp.toString()
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      //email id from where you have generated the pass key
      user: "sktajuddinali23@gmail.com",
      //pass key
      pass: "mkga mgvo zxei heyf",
    },
  })

  try {
    await transporter.sendMail({
      from: "",
      //sender email id
      to: recipientEmail,
      subject: `Woof! Your OTP for Password Reset 🐾`,
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Static Template</title>
      
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          style="
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: #ffffff;
            font-size: 14px;
          "
        >
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
              padding: 45px 30px 60px;
              background: #f4f7ff;
              background-image: url(https://cdn.sanity.io/images/hjuptpmq/production/9529fe4275c0d97f4ec7a69bc253463d6c8cafb1-3000x2000.jpg);
              background-repeat: no-repeat;
              background-size: 800px 452px;
              background-position: top center;
              font-size: 14px;
              color: #434343;
            "
          >
            <header>
              <table style="width: 100%">
                <tbody>
                  <tr style="height: 0">
                    <td>
                      <img
                        alt=""
                        src="https://cdn.sanity.io/images/hjuptpmq/production/59d78481cbe6564f31def66ffad5df18495a7579-512x512.webp"
                        height="80px"
                      />
                    </td>
                    <td style="text-align: right">
                      <span
                        style="
                          font-size: 24px;
                          line-height: 30px;
                          color: #ffffff;
                          font-family: Times New Roman, serif;
                          font-weight: 600;
                        "
                        >PAWS PALACE</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </header>
      
            <main>
              <div
                style="
                  margin: 0;
                  margin-top: 70px;
                  padding: 92px 30px 115px;
                  background: #ffffff;
                  border-radius: 30px;
                  text-align: center;
                "
              >
                <div style="width: 100%; max-width: 489px; margin: 0 auto">
                  <h1
                    style="
                      margin: 0;
                      font-size: 24px;
                      font-weight: 500;
                      color: #1f1f1f;
                    "
                  >
                    Your OTP
                  </h1>
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-size: 16px;
                      font-weight: 500;
                      color: #45443F"
                    "
                  >
                    Hey Hooman,
                  </p>
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-weight: 500;
                      letter-spacing: 0.56px;
                      color: #45443F"
                    "
                  >
                    Forgot your password?
                    <br />
      
                    No worries, I'm here to help you get back on track in style!
                    <br />
                    This OTP is good for
                    <span style="font-weight: 600; color: #1f1f1f">5 minutes</span>.
                    Remember, keep it under wraps! Don't share it with anyone, not
                    even our Paws Palace crew.
                  </p>
                  <p
                    style="
                      margin: 0;
                      margin-top: 60px;
                      font-size: 25px;
                      font-weight: 600;
                      letter-spacing: 18.2px;
                      text-align:center;
                      color: #8c8c8c;
                    "
                  >
                    ${OTPString}
                  </p>
                </div>
              </div>
      
              <p
                style="
                  max-width: 400px;
                  margin: 0 auto;
                  margin-top: 90px;
                  text-align: center;
                  font-weight: 500;
                  color: #8c8c8c;
                "
              >
                Need some extra paw-sistance?
                <br />
                Drop us a line at
                <a
                  href="mailto:archisketch@gmail.com"
                  style="color: #499fb6; text-decoration: none"
                  >pawspalace@gmail.com</a
                >
                or visit our
                <a
                  href=""
                  target="_blank"
                  style="color: #499fb6; text-decoration: none"
                  >Help Center</a
                >
              </p>
            </main>
      
            <footer
              style="
                width: 100%;
                max-width: 490px;
                margin: 20px auto 0;
                text-align: center;
                border-top: 1px solid #e6ebf1;
              "
            >
              <p
                style="
                  margin: 0;
                  margin-top: 40px;
                  font-size: 16px;
                  font-weight: 600;
                  color: #434343;
                "
              >
                PAWS PALACE
              </p>
              <p style="margin: 0; margin-top: 8px; color: #434343">
                1335, 11th Cross Rd, Stage 3, Indiranagar, Bengaluru, Karnataka 560038
              </p>
              <div style="margin: 0; margin-top: 16px">
                <a href="" target="_blank" style="display: inline-block">
                  <img
                    width="36px"
                    alt="Facebook"
                    src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                  />
                </a>
                <a
                  href=""
                  target="_blank"
                  style="display: inline-block; margin-left: 8px"
                >
                  <img
                    width="36px"
                    alt="Instagram"
                    src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
                /></a>
                <a
                  href=""
                  target="_blank"
                  style="display: inline-block; margin-left: 8px"
                >
                  <img
                    width="36px"
                    alt="Twitter"
                    src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                  />
                </a>
                <a
                  href=""
                  target="_blank"
                  style="display: inline-block; margin-left: 8px"
                >
                  <img
                    width="36px"
                    alt="Youtube"
                    src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
                /></a>
              </div>
              <p style="margin: 0; margin-top: 16px; color: #434343">
                Copyright © 2024 Company. All rights reserved.
              </p>
            </footer>
          </div>
        </body>
      </html>
      
      `,
    })
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
  return res.status(200).json({ error: "" })
}
