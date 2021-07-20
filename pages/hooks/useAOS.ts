import 'aos/dist/aos.css'
import AOS,{AosOptions} from 'aos'

const initAOS = (options?:AosOptions) => {
    AOS.init(options)
}

export default initAOS