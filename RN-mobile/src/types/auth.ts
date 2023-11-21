export interface SignProps {
    email: string;
    password: string;
}

export interface AuthProps extends SignProps {
    mode: "signUp" | "signInWithPassword";
}