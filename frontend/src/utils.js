export const toNumUSD = (usd) => {
   const current = Number(usd.toFixed(2))
    return Math.ceil(current+0.4).toFixed(2)
}