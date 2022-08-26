import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

import PlayerLayout from '../components/PlayerLayout'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => (
  <PlayerLayout>
    <Component {...pageProps} />
  </PlayerLayout>
)

export default MyApp
