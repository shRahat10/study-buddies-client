import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, updateProfile } from "firebase/auth";
import { BASE_URL } from "../constent/constent";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [submissions, setSubmissions] = useState(null);
    const [noOfPages, setNoOfPages] = useState(null);
    const [token, setToken] = useState(false);

    const googleSignIn = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        // setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const userRegistration = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        return signOut(auth)
    }

    const updateUserProfile = (name, photoUrl) => {
        // setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        }).then(() => {
            setUser(currentUser => ({
                ...currentUser,
                displayName: name,
                photoURL: photoUrl,
                email: auth.currentUser.email,
            }))
                .then(() => {
                    setLoading(false);
                })
        }).catch(error => {
            console.log("Error updating profile: ", error);
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setToken(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {
                email: userEmail
            };
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                axios.post(BASE_URL + '/jwt', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                        setToken(true);
                    })
            }
            else {
                axios.post(BASE_URL + '/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        };
    }, []);

    useEffect(() => {
        fetch(BASE_URL + '/study-buddies')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setNoOfPages(Math.ceil(data.length / 12))
            })
    }, [])

    useEffect(() => {
        if (token) {
            fetch(BASE_URL + '/submissions', { credentials: 'include' })
                .then(res => res.json())
                .then(data => setSubmissions(data))
        }
    }, [token])

    const authInfo = {
        data, setData, noOfPages, setNoOfPages, submissions, setSubmissions, user, loading, updateUserProfile, setLoading, googleSignIn, githubSignIn, userRegistration, userLogin, userLogout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;