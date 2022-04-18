//  データストア
var PropertyStore = {
  debug: true,
  state: {
    property: {
      type: '1',
      whatkind: '',
      where: '',
      id: ''
    }
  },
  validate () {
    return true
  }
}
export default PropertyStore
