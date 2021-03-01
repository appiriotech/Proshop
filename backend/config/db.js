const mongoose =require('mongoose')


const connectDB=async()=>{
try{

const conn=await mongoose.connect(process.env.ATLAS_URL,{

	useUnifiedTopology:true,
	useNewUrlParser:true,
	useCreateIndex:true

})

console.log(`DB connected:${conn.connection.host}`)
//
}
catch (error){

console.error(`Error Dectected:${error.message}`)
process.exit(1)

}


}

module.exports=connectDB