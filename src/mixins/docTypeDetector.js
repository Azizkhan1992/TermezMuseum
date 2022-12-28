export default {
    methods: {
      docTypeDetector(link) {
        const type = link.split('.').pop()
        const formattedType = type.toString()[0] + type.toString()[1] + type.toString()[2]
        return formattedType
      }
    }
  }