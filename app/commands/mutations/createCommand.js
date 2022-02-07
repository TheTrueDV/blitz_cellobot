import db from "db"

/**
 *
 * @param {*} input
 * @returns
 */

export default async function addCommand(input, res) {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  console.log(input)
  const { channelId, name, aliases, replyText, requiredRole, permittedUserIds, enabled } = input

  // Validate Data
  res.json({
    channelId: channelId,
    name: name,
    aliases: aliases,
    replyText: replyText,
    requiredRole: requiredRole,
    permittedUserIds: permittedUserIds,
    enabled: enabled,
  })

  const command = await db.commands.create({
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
