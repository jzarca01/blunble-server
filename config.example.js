const providers = ['twitter']

exports.SESSION_SECRET = 'weshalors';

exports.PROD_URL = '';

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === 'production'
    ? `${this.PROD_URL}/${provider}/callback`
    : `http://localhost:8080/${provider}/callback`
})

const [twitterURL] = callbacks

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? this.PROD_URL
  : ['https://127.0.0.1:3000', 'https://localhost:3000']

exports.TWITTER_CONFIG = {
  consumerKey: '',
  consumerSecret: '',
  callbackURL: twitterURL,
}
