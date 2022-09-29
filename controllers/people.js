const people = require("../models/people");
module.exports = {
  index,
  show,
  edit,
  new: newPerson,
  create,
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
function newPerson(req, res) {
  res.render("people/new", {});
}
function create(req, res) {
  let newEployeeId = people.create(req.body);
  console.log(newEployeeId)
  res.redirect(`/people/${newEployeeId}`);
}
