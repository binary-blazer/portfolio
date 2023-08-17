import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../site.config.js"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = config.skills.data.map((skill: any) => {
    return {
      name: skill.name,
      src: skill.src,
    };
  });

  res.status(200).json(data);
};
