import React, { Component } from "react";
import 'firebase/firestore';
import firebaseApp, {db} from '../conf/Firebase'

// componentDidMount() => {
//  db.collection("users").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//            let data = `${doc.id} => ${doc.data()}`
//            return(data);
//         });
//     });
// }

   



class Main extends Component { 
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        db.collection('users').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.state[doc.id] = doc.data()
            })
        })
        console.log(this.state)
    }
    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
            )
        }
    }
    
export default Main