import mongoose from 'mongoose'

const CliqueSchema = new mongoose.Schema(
  {
    data : { type : String}
  }
);

var Model = mongoose.model("Clique", CliqueSchema);
export default Model;