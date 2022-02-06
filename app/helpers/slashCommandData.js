exports.dropDowndata = {
    response_type: "in_channel", // public to the channel
    text: "Welcome. How are you doing?",
    attachments: [
      {
        fallback: "Say your mood",
        color: "#3AA3E3",
        attachment_type: "default",
        callback_id: "mood_selection",
        actions: [
          {
            name: "mood_list",
            //   text: "Pick a game...",
            type: "select",
            options: [
              {
                text: "Doing Well",
                value: "well",
              },
              {
                text: "Neutral",
                value: "neutral",
              },
              {
                text: "Feelng Lucky",
                value: "lucky",
              },
            ],
          },
        ],
      },
    ],
  };