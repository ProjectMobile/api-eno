import Cookie from 'js-cookies'
import { api } from '../Api';
import getCookies from './getCookies';

let fifteenMinutes = new Date(new Date().getTime() + 900 * 1000);

const setToken = (cookieInfo) => {
    Cookie.setItem('token', cookieInfo, {
        expires: fifteenMinutes,
        secure: true,
        sameSite: 'strict',
        path: '/'
    })

    const time = () => setInterval(() => {

        api.post('auth-refresh', {
            refresh_token: getCookies('refresh-token')
        }).catch((err) => {
            clearTime()
        })

    },
        1000 * 15
    )

    

    time();

    function clearTime(){
        clearInterval(time)
    }

}

const setRefresh = (cookieInfo) => {
    Cookie.setItem('refresh-token', cookieInfo, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/'
    })
}

export { setToken, setRefresh }