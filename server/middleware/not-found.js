const notFound = (req, res) =>
  res.status(404).json({ status: 404, msg: "Route does not exist" });

module.exports = notFound;