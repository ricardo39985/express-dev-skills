const Employee = require('../models/employee');
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
  res.render('employees/index', { title: 'All employees', employees: Employee.getAll() });
}

function show(req, res) {
  if (!Employee.getOne(req.params.id)) res.redirect('/employee');
  res.render('employees/show', {
    title: 'Details',
    person: Employee.getOne(req.params.id),
  });
}

function edit(req, res) {
  if (!Employee.getOne(req.params.id)) res.redirect('/employee');

  res.render('employees/edit', {
    title: 'Edit',
    person: Employee.getOne(req.params.id),
  });
}

function newPerson(req, res) {
  res.render('employees/new', {});
}

function create(req, res) {
  let newEployeeId = Employee.create(req.body);
  res.redirect(`/employees/${newEployeeId}`);
}

function deletePerson(req, res) {
  Employee.deleteOne(req.params.id);
  res.redirect('/employees');
}

function update(req, res) {
  Employee.update(req.params.id, req.body);
  res.redirect(`/employees/${req.params.id}`);
}
