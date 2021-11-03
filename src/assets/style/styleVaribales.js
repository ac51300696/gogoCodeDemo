
/**
 * @type {{ [key: string] :any }}
 */
const valueMap = {
    calendarLeftWidth: 188,
    calendarRoomWdith: 94,
    calendarStatusWidth: 94,
    calendarStatusHeight: 52,
    //calendarStatusHeight: 41,
    // calendarHeadDayHeight: 56,
    calendarHeadDayHeight: 40,
    //calendarHeadFilterHeight: 52,
    calendarHeadFilterHeight: 34,
    // calendarHeadHeight: 108
    calendarHeadHeight: 74
}
/**
 * @type {{ [key: string] :any }}
 */
const styleMap = {}
Object.keys(valueMap).forEach(e => {
    styleMap[e] = `${valueMap[e]}px`
})
module.exports = {
    css: styleMap,
    value: valueMap
}
