describe("instance runs", () => {
  it("should not start without env var", done => {
    try {
      require('./bot').connect()
    } catch (_) {
      done()
    }
  })
})
