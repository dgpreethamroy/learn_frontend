import ChatMessage from "../models/ChatMessage.js";

export const createMessage = async (req, res) => {
  const newMessage = new ChatMessage(req.body);

  try {
       const data = JSON.stringify({
      Query: req.body.message,
    });

    const response = await fetch(pyserver, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    const result = await response.text();
    req.body["check"] = result;
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await ChatMessage.find({
      chatRoomId: req.params.chatRoomId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
