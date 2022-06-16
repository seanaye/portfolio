interface Args {
  /** The string to be truncated */
  str: string;
  /** The limit of the length of the output string */
  limit: number;
  /** The text to append if the length is exceeded with lookahead accounted for */
  suffix?: string;
}

export function truncateString({ str, limit, suffix = "" }: Args): string {
  if (str.length <= limit) return str;

  const lookahead = suffix.length

  const chopAt = Math.max(limit - lookahead, 0)
  const prefix = str.substring(0, chopAt)
  return `${prefix}${suffix}`
}
