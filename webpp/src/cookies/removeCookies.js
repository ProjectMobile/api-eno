import Cookie from 'js-cookies'


const removeCookies = (cookiename) => {
    return Cookie.removeItem(cookiename)
}

export default removeCookies