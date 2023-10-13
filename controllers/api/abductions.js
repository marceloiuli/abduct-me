const Abduction = require('../../models/abduction');
module.exports = {
  index,
  create,
  update,
  delete: deleteAbductions,
  edit,
};
async function index(req, res) {
  try{
  const abductions = await Abduction.find({});
  res.json(abductions);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}
async function create(req, res) {
  try{
    req.body.user=req.user._id
  const abduction = await Abduction.create(req.body);
  res.json('')
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}
async function edit(req, res) {
  try{
  const abduction = await Abduction.findById(req.params.id);
  console.log(abduction)
  res.json(abduction);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}
async function deleteAbductions(req, res) {
  try{
    console.log(req.params)
  const deleteAbductions = await Abduction.findOneAndDelete({"_id": req.params.id});
  res.json(deleteAbductions);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}
async function update(req, res) {
  try {
    console.log(req.body)
  const updatedAbductions = await Abduction.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(updatedAbductions);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}











