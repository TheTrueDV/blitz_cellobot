import db from "db"

export default async function deleteCommand(input) {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const { channelId, name, aliases, replyText, requiredRole, permittedUserIds, enabled } =
    request.body

  // Validate Data

  const command = await db.commands.delete({
    channelId,
    name,
    aliases,
    replyText,
    requiredRole,
    permittedUserIds,
    enabled,
  })
  return command
}
