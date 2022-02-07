const getMany = require("../queries/getCommands")
const patch = require("../mutations/updateCommand")
const remove = require("../mutations/deleteCommand")

const handler = async (req, res) => {
  if (req.method === "GET") {
    // await getMany(req.body)
  } else if (req.method === "PATCH") {
    // await patch(req.body)
  } else if (req.method === "DELETE") {
    // await remove(req.body)
  } else {
    console.log("req.method:")
    console.log(req.method)
    console.log("\nreq.body:")
    console.log(req.body)
  }
}
export default handler
