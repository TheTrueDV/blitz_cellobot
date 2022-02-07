import db from "db"

export default async function getCommand(input, res) {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const { channelId, name, aliases, replyText, requiredRole, permittedUserIds, enabled } =
    request.body

  // Validate Data

  const command = await db.commands.findFirst({
    channelId,
    name,
    aliases,
    replyText,
    requiredRole,
    permittedUserIds,
    enabled,
  })

  res.json({
    message: "GET ALL",
    command: command,
  })
  return command
}
