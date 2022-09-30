const people = require("../models/people");
module.exports = {
  index,
  show,
  edit,
  new: newPerson,
  create,
  delete: deletePerson,
  update,
};
function index(req, res) {
  res.render("people/index", { title: "All people", people: people.getAll() });
}
function show(req, res) {
  if(!(people.getOne(req.params.id))) res.redirect('/people')
  res.render("people/show", {
    title: "Details",
    person: people.getOne(req.params.id),
  });
}
function edit(req, res) {
  if(!(people.getOne(req.params.id))) res.redirect('/people')

  res.render("people/edit", { title: "Edit", person: people.getOne(req.params.id)});
}
function newPerson(req, res) {
  res.render("people/new", {});
}
function create(req, res) {
  let newEployeeId = people.create(req.body);
  console.log(newEployeeId);
  res.redirect(`/people/${newEployeeId}`);
}
function deletePerson(req, res) {
  people.deleteOne(req.params.id);
  res.redirect('/people')
}


function update(req,res) {

}
