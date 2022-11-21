const config = require('../../../site.config.js');

export default async (req, res) => {
    const data = config.projects.data.map((project) => {
        return {
            id: project.id,
            image: project.image,
            slug: project.slug,
            name: project.name,
            github: project.github,
            githubLink: project.githubLink,
            website: project.website,
            websiteLink: project.websiteLink,
            invite: project.invite,
            inviteLink: project.inviteLink,
            description: project.description,
        };
    });

    res.status(200).json(data)
};
