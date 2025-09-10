export default function useHelper() {
  const numberFormat = number => {
    if (number) {
      const parts = parseFloat(number).toFixed(2).split('.')

      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      
      return parts.join('.')
    }
    
    return '0.00'
  }

  const numberFormatForPay = number => {
    if (number) {
      // truncate to 1 decimal instead of rounding
      const truncated = Math.floor(number * 10) / 10
      const parts = truncated.toString().split('.')

      // ensure one decimal digit
      if (!parts[1]) parts[1] = '0'

      return parts.join('.')
    }
    
    return '0.0'
  }

  const isAdmin = () => {
    const host = window.location.href
    //const adminPrefix = `${import.meta.env.VITE_ADMIN_URL_PREFIX}.`
    const adminUrlStr = 'admin';
    
    return !!(host.includes(adminUrlStr))
    //return !!(host.includes('/backend-part'))
  }

//   const dateFormat = (date, format = null) => {
//     if (date) {
//       if (format) {
//         return moment(date).format(format)
//       }

//       return moment(date).format('DD/MM/YYYY')
//     } 
    
//     return '-' 
//   }

  return {
    numberFormat,
    numberFormatForPay,
    isAdmin,
  }
}
