const testingController = (req,res)=>{
res.status(200).send('<h1> This is a test route.</h1>')
}

module.exports = {testingController};