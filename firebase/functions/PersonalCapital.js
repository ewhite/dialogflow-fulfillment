import fetch from 'fetch'

const CSRF_REGEX = /globals.csrf=\'([a-f0-9-]+)\'/
const BASE_URL = 'https://home.personalcapital.com'
const API_URL = `${BASE_URL}/api`

export function PersonalCapital() {


    return {
        login: async (username, password) => {
            const initial_csrf = await getCsrfFromHomePage()

        },
        post,

    }
}

async function post(endpoint, data) {
    return await fetch.post(
        `${API_URL}${endpoint}`,
        data
    )
}

async function identifyUser(username, csrf) {
    const data = {
        username,
        csrf,
        apiClient: "WEB",
        bindDevice: "false",
        skipLinkAccount: "false",
        redirectTo: "",
        skipFirstUse: "",
        referrerId: ""
    };

    const response = await post("/login/identifyUser", data);
    // todo: translate the remainder of this method
} 

async function getCsrfFromHomePage() {
    const response = await fetch.get(BASE_URL)
    const text = await response.text()

    if (text.match(CSRF_REGEX)) {
        return text.match(CSRF_REGEX)[1]
    }
    return undefined;
}