const config = require('../../../site.config.js');

export default async function handler(req, res) {
    const username = config.github.username
    const token = "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"
    
    const response = await fetch(
        'https://api.github.com/users/' + username + '/repos?sort=updated&per_page=8',
        {
        headers: {
            Authorization: 'token ' + token,
        },
        }
    );
    
    const data = await response.json();
    
    res.status(200).json(data);
    }