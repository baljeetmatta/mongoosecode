const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    "username":{
        type:String,
        required:[true,'username must be provided']
    },
    "age":{
        type:Number,
        min:[10,'Minimum value for age is 10'],
        max:40
    },
    "password":String,
    "role":String,
    "Firstname":String,
    "Lastname":String
});
userSchema.virtual("Name").get(function(){
    return this.Firstname+" "+this.Lastname

})
userSchema.virtual("Name").set(function(data){
    console.log(data);
    let arr=data.split(" ");
    this.Firstname=arr[0];
    this.Lastname=arr[1]

})
module.exports=mongoose.model("users",userSchema);
