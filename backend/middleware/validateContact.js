// middleware/validateContact.js

module.exports = (req, res, next) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      success: false,
      error: "Name and message are required"
    });
  }

  next();
};
