import AOS, { AosOptions } from 'aos'
import 'aos/dist/aos.css'

const initAOS = (options?: AosOptions) => {
  AOS.init(options)
}

export default initAOS
