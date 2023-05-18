import { AuthProvider, GoogleAuthProvider, User, UserCredential, getAuth, indexedDBLocalPersistence, signInWithPopup, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { app } from './cfg';

const _auth = getAuth(app);
export const authChanged = new BehaviorSubject<User | null>(null);

_auth.setPersistence(indexedDBLocalPersistence);
_auth.onAuthStateChanged(
    authChanged, 
    (error) => {
        console.log('Erro ao atualizar status do usuário')
    },
    () => {
        console.info('Atualização de status completada');
    }
);

export async function singIn(provider: AuthProvider): Promise<string | undefined> {
   const credentials = await signInWithPopup(_auth, provider).catch(reason => {
        console.error('Erro ao realizar login', reason);
        return;
   });

   if (!!credentials) {
        if (credentials.user.emailVerified && ['job.consultor@gmail.com.br'].includes(credentials?.user?.email || '')) return '/home';
        return undefined;
   } else {
        return undefined;
   }
}

export async function logout() {
    return await signOut(_auth).catch(reason => {
        console.log(reason);
        return;
    });
}

export function getUser() {
    console.log('getUser', _auth.currentUser);
    if (_auth.currentUser == null) return undefined;
    const {  uid, displayName, email, photoURL } = _auth.currentUser; 
    return {  uid, displayName, email, photoURL };
}

export async function avaiableProviders() {
    return [
        { id: 'google', description: 'Entrar com Google', color: 'danger', logo: 'logo-google', provider: GoogleAuthProvider },
        { id: 'facebook', description: 'Entrar com Facebook', color: 'primary', logo: 'logo-facebook', provider: GoogleAuthProvider }
    ]
}
