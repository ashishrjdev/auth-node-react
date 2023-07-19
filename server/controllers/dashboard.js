const getDashboardDetail = async (req, res) => {
  res.status(200).json({ msg: `Get Dashboard detail for user: ${req.user.id}` });
};

module.exports = getDashboardDetail;
