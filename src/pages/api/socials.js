const config = require('../../../site.config.js');

export default async (req, res) => {
    const data = config.socials.map((social) => {
        return {
            name: social.name,
            src: social.src,
            link: social.link,
        };
    });

    res.status(200).json(data)
};