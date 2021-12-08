import mitt from 'mitt'

type Events = {
  msg: string
  reverseMsg: string
}
const emitter = mitt<Events>()
export default emitter
