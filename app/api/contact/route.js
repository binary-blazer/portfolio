import blacklistedWords from "@/contact/blacklistedWords";

export async function POST(request) {
  try {
    const { email, firstName, lastName, message } = await request
      .clone()
      .json();

    if (!email || !firstName || !lastName || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    const discordWebhook = process.env.DISCORD_WEBHOOK;

    if (!discordWebhook) {
      return new Response("Discord webhook is not set", { status: 500 });
    }

    if (message.length > 2000) {
      return new Response("Message is too long", { status: 400 });
    }

    if (email.length > 100) {
      return new Response("Email is too long", { status: 400 });
    }

    if (firstName.length > 100) {
      return new Response("First name is too long", { status: 400 });
    }

    if (lastName.length > 100) {
      return new Response("Last name is too long", { status: 400 });
    }

    if (
      blacklistedWords.some((word) =>
        email.toLowerCase().replace("@", " ").includes(word),
      )
    ) {
      const words = blacklistedWords.filter((word) =>
        email.toLowerCase().includes(word),
      );
      const _message = "Email contains not allowed words " + words.join(", ");

      return new Response(_message, { status: 403 });
    }

    if (
      blacklistedWords.some((word) => firstName.toLowerCase().includes(word))
    ) {
      const words = blacklistedWords.filter((word) =>
        firstName.toLowerCase().includes(word),
      );
      const _message =
        "First name contains not allowed words " + words.join(", ");

      return new Response(_message, { status: 403 });
    }

    if (
      blacklistedWords.some((word) => lastName.toLowerCase().includes(word))
    ) {
      const words = blacklistedWords.filter((word) =>
        lastName.toLowerCase().includes(word),
      );
      const _message =
        "Last name contains not allowed words " + words.join(", ");

      return new Response(_message, { status: 403 });
    }

    if (blacklistedWords.some((word) => message.toLowerCase().includes(word))) {
      const words = blacklistedWords.filter((word) =>
        message.toLowerCase().includes(word),
      );
      const _message = "Message contains not allowed words " + words.join(", ");

      return new Response(_message, { status: 403 });
    }

    const webhookData = {
      content: `**New Contact Form Submission**`,
      embeds: [
        {
          color: 0x2f3136,
          fields: [
            { name: "Name", value: `${firstName} ${lastName}` },
            { name: "Email", value: email },
            { name: "Message", value: message },
          ],
        },
      ],
    };

    const response = await fetch(discordWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookData),
    });

    if (!response.ok) {
      return new Response("An error occurred while sending the message", {
        status: 500,
      });
    }

    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred while sending the message", {
      status: 500,
    });
  }
}
