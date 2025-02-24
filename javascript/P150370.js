function solution(today, terms, privacies) {
  const map = new Map()

  terms.forEach(item => {
    const [type, month] = item.split(' ')
    map.set(type, +month * 28)
  })

  const [tYear, tMonth, tDate] = today.split('.')
  const convertToday = +tYear * 12 * 28 + +tMonth * 28 + +tDate

  return privacies.reduce((acc, privacy, i) => {
    const [pDate, pType] = privacy.split(' ')
    const [cYear, cMonth, cDate] = pDate.split('.')
    const convertCurrent = +cYear * 12 * 28 + +cMonth * 28 + +cDate

    if (convertCurrent + map.get(pType) <= convertToday) {
      return acc.concat(i + 1)
    }
    return acc
  }, [])
}
