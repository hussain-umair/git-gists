const isEmpty = input => input === null || input === undefined || input === ''

const locale = 'en-GB'
export const dateFormatter = input => {
  if (isEmpty(input)) return ''

  return new Date(input).toLocaleDateString(locale)
}
