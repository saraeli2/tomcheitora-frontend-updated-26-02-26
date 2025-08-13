export default function useHelper() {
  const numberFormat = number => {
    if (number) {
      const parts = parseFloat(number).toFixed(2).split('.')

      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      
      return parts.join('.')
    }
    
    return '0.00'
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
  }
}
