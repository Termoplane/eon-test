export default function ({ $axios }, inject) {
  const api = $axios.create({
    baseURL: 'https://eon.estate/api/v0'
  })

  // Inject to context as $api
  inject('api', api)
}