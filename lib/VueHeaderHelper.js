export default class VueHeaderHelper {
  static generateHeadObject(title, description, url) {
    const header = {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        { hid: 'og:url', property: 'og:url', content: url }
      ]
    }
    return header
  }
}
