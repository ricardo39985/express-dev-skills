const people = require("../models/people");
module.exports = {
  index,
  show,
  edit,
};
function index(req, res) {
  res.render("people/index", { title: "All people", people: people.getAll() });
}
function show(req, res) {
  res.render("people/show", {
    title: "Details",
    person: people.getOne(req.params.id),
  });
}
function edit(req, res) {
  res.render("people/edit", { title: "Edit" });
}
