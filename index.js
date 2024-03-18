const  event=require ('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT||8080;
app.use(bodyParser.JSON());

app.post('/bfhl',(req,res)=>{
    try{
        const data=req.body.data;
        const user_name="rashi_mittal";
        const email="rashi5039.be21@chitkrauniversity.edu.in";
        const roll_number="2119085039";

        let even_number=[];
        let odd_number=[];
        let alphabet=[];

        for(int i=0;i<data.length();i++){
            if(!isNaN(data[i])){
                even_number.push(data[i]);
            }
            else{
                odd_number.push(data[i]);
            }
             
        }
        UserModel.findAllUsers({})
        .then((users) => {
          return res.status(200).json({
            status: true,
            data: users,
          });
        })
        .catch((err) => {
          return res.status(500).json({
            status: false,
            error: err,
          });
        });
        const UserModel = {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            username: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            }
    }
});
module.exports = {
    initialize: (sequelize) => {
      this.model = sequelize.define("user_name", UserModel);
    },
  
    createUser: (user) => {
      return this.model.create(user);
    }
  };
app.listen(8080, () => {
    console.log("Server Listening on PORT:", 8080);
  });
  const router = require("express").Router();