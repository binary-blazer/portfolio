import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../site.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({
      success: true,
      message: "All fields are required",
      data: null,
    });
  }

  let _ = await fetch(process.env.WEBHOOK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "binaryblazer.me | Contact Form",
      attachments: [],
      embeds: [
        {
          title: "Contact - " + name,
          type: "rich",
          color: 5193214,
          fields: [
            {
              name: "Email",
              value: email || "N/A",
            },
            {
              name: "Username",
              value: name || "N/A",
            },
            {
              name: "Content",
              value: message || "N/A",
            },
          ],
        },
      ],
    }),
  });

  res.status(200).json({
    success: true,
    message: "Message sent successfully",
    data: {
      _,
    },
  });
};
