import Cookie from 'js-cookies'


const getCookies = (cookiename) => {
    return Cookie.getItem(cookiename)
}

export default getCookies