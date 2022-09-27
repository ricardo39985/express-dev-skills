module.exports = {
  index,
  show,
  edit,
};
function index(req, res) {
  res.render("people/index", { title: "All people" });
}
function show(req, res) {
  res.render("people/show", { title: "Details" });
}
function edit(req, res) {
  res.render("people/edit", { title: "Edit" });
}
