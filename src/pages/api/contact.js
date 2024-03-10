export default async (req, res) => {
    try {
        const { name, email, message } = req.body;

        let _ =  await fetch("https://discord.com/api/webhooks/996454141197025391/gtwGkipX_Ce6x16PVvPjqzDTE6y9FpRmCJrcRVijtITF7gz4rivb7j6INBjy3brkp0yu", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'JanjyTapYT.me | Contact Form',
                attachments: [],
                embeds: [
                    {
                        title: 'Contact - '+ name,
                        type: "rich",
                        color: 5193214,
                        fields: [
                            {
                                name: 'Email',
                                value: email || 'N/A'
                            },
                            {
                                name: 'Username',
                                value: name || 'N/A'
                            },
                            {
                                name: 'Content',
                                value: message || 'N/A'
                            }
                        ]
                    }
                ]
            })
        });

        return res.status(200).json({
            success: true
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            error: e
        });
    }
}