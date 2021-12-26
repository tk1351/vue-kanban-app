exports.command = function (selector, event, keyCode) {
  return this.execute(function (selector, event, keyCode) {
    const e = document.createEvent('HTMLEvents')
    e.initEvent(event, true, true)
    if (keyCode) {
      e.keyCode = keyCode
    }
    document.querySelector(selector).dispatchEvent(e)
  }, [selector, event, keyCode])
}
