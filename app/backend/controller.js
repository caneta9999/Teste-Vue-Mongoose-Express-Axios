import Model from "./model.js"

class CliqueModel {
  async cadastrar() {
    var dataAtual = new Date();
    dataAtual = dataAtual.getDate() + '/' + (dataAtual.getMonth() + 1) + '/' + dataAtual.getFullYear() + ' ' + dataAtual.getHours() + ':' + dataAtual.getMinutes() + ':' + dataAtual.getSeconds()
    const data = await Model.create({'data': dataAtual});
    return null;
  }
  async getTotal(req,res) {
    const data = await Model.find({});
    return data;
  }
  async getLast(req,res){
    const data = await Model.findOne().sort({ field: 'asc', _id: -1 });
    return data;  
  }
}
var cliqueModel = new CliqueModel();
export default cliqueModel;