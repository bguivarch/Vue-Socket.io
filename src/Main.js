import Observer from './Observer'
import Emitter from './Emitter'

export default {

    install(Vue, connection, store){

        if(!connection) throw new Error("[Vue-Socket.io] cannot locate connection")

        let observer = new Observer(connection, store)

        Vue.prototype.$socket = observer.Socket;

        Vue.mixin({
            created(){
                let sockets = this.$options['sockets']

                for (var socket in sockets) {
                    Emitter.addListener(key, value, this)
                    target[key] = value
                    return true;
                }

                if(sockets){
                    Object.keys(sockets).forEach((key) => {
                        this.$options.sockets[key] = sockets[key];
                    });
                }
            },
            beforeDestroy(){
                let sockets = this.$options['sockets']

                if(sockets){
                    Object.keys(sockets).forEach((key) => {
                        delete this.$options.sockets[key]
                    });
                }
            }
        })

    }

}
