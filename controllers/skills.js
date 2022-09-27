module.exports = {
  index,
  show,
  edit,
};
function index(req, res) {
  res.render("skills/index", { title: "All skills" });
}
function show(req, res) {
  res.render("skills/show", { title: "Details" });
}
function edit(req, res) {
  res.render("skills/edit", { title: "Edit" });
}
