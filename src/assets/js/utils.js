/**
 * 时间戳 转成 时间 [00:00]
 * @param timestamp
 * @return {string}
 */
export let timeStampToTime = function (timestamp) {
  let tempMin = Math.floor(timestamp / 60)
  tempMin = (tempMin < 10) ? '0' + tempMin : tempMin
  return tempMin + ':' + (timestamp % 60 / 100).toFixed(2).slice(-2)
}
