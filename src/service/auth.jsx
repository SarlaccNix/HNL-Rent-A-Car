import firebase from '../config/firebaseconfig'

//Login State Listener
firebase
        .auth()
        .onAuthStateChanged(user =>{
            if(user){
                localStorage.setItem("displayname", user.displayName)
                localStorage.setItem("email", user.email)
                localStorage.setItem("token", user.refreshToken)
                localStorage.setItem("photo", user.photoURL)
            }
            else{
                console.log(user)
            }
        })
        
        

//Login
export const authOptions = (provider) => {
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res)=>{
        return res.user;
    }).catch((error)=>{
        return error
    })

};

//Logout
export const authLogout = () =>{

    return firebase
    .auth()
    .signOut()
    .then(()=>{
        localStorage.removeItem("displayname")
        localStorage.removeItem("email")
        localStorage.removeItem("token")
    })
}
