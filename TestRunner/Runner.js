const HopeTests = []
let HopePass = 0
let HopeFail = 0
let HopeError = 0

const hopeThat = (message, callback) => {
    HopeTests.push([message, callback])
}

const main = () => {
    HopeTests.forEach(([message, test]) => {
      try {
        test()
        HopePass += 1
      } catch (e) {
        if (e instanceof assert.AssertionError) {
          HopeFail += 1
        } else {
          HopeError += 1
        }
      }
    })

    
  console.log(`pass ${HopePass}`)
  console.log(`fail ${HopeFail}`)
  console.log(`error ${HopeError}`)

}

