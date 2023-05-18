import { AuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const _auth = getAuth();

export async function singIn(provider: AuthProvider) {
   return signInWithPopup(_auth, provider);
}

export async function avaiableProviders() {
    return [
        { id: 'google', description: 'Entrar com Google', color: '#fff', logo: 'logo-google', provider: GoogleAuthProvider },
        //{ id: 'facebook', description: 'Entrar com Facebook', color: 'blue', logo: 'logo-facebook', provider: GoogleAuthProvider }
    ]
}
