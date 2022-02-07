// const get = require("../queries/getCommand")
// const post = require("../mutations/createCommand")

import { BlitzApiHandler } from "blitz"

// /**
//  * @typedef BlitzApiHandler
//  * @param {*} req
//  * @param {*} res
//  */

// /**
//  * @type {BlitzApiHandler}
//  */
// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     // Process a POST request
//     console.log("POST")
//     console.log(req.body)
//     // await post(...req.body, res)
//     // } else if (req.method === "GET") {
//     //   await get(...req.body, res)
//     // } else {
//     //   console.log("req.method:")
//     //   console.log(req.method)
//     //   console.log("\nreq.body:")
//     //   console.log(req.body)
//     //   // Handle any other HTTP method
//     // }
//   }
// }
// export default handler
const handler = (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ name: "John Doe" }))
}
export default handler

/**
 * model Commands {
  id               String   @id @default(dbgenerated()) @map("_id") @db.ObjectId
  channelId        String
  name             String
  aliases          String[]
  replyText        String
  requiredRole     String[]
  permittedUserIds String[]
  enabled          Boolean
}
 */
