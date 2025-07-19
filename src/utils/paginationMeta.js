export const paginationMeta = (options, total, t) => {
  const start = (options.page - 1) * options.itemsPerPage + 1
  const end = Math.min(options.page * options.itemsPerPage, total)
  const from = total === 0 ? 0 : start
  
  return t('pagination.meta', { from, to: end, total })
  return `Showing ${total === 0 ? 0 : start} to ${end} of ${total} entries`
}
