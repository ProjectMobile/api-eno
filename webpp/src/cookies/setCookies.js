import Cookie from 'js-cookies'

let fifteenMinutes = new Date(new Date().getTime() + 900 * 1000);

const setToken = (cookieInfo) => {
    Cookie.setItem('token', cookieInfo, {
        expires: fifteenMinutes,
        secure: true,
        sameSite: 'strict',
        path: '/'
    })
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