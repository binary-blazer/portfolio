import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../site.config.js"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = config.socials.map((social: any) => {
    return {
      name: social.name,
      src: social.src,
      link: social.link,
    };
  });

  res.status(200).json(data);
};
