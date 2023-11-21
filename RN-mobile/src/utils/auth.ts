import axios from "axios";

import { SignProps, AuthProps } from "types/auth";

const API_KEY = "AIzaSyCzZQC_5wVpt9lWHCeut46uZUS4jkiO--I";

export async function authenticate ({mode, email, password}: AuthProps) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true 
    });
    
    const token = response.data.idToken;

    return token;
}

export function createUser({email, password}: SignProps) {
    return authenticate({ mode: "signUp", email, password});
}

export function loginUser({email, password}: SignProps) {
    return authenticate({ mode: "signInWithPassword", email, password});
}