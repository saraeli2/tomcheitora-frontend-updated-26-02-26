export const israelPhoneValidator = value => {
  // Required check
  if (!value || typeof value !== 'string' || value.trim() === '') {
    return 'מספר הטלפון לא תקין'
  }

  const cleaned = value.trim()

  // Must match: starts with 05 + 8 digits
  const isValid = /^05\d{8}$/.test(cleaned)

  return isValid || 'מספר הטלפון לא תקין'
}
