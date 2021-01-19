import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class NewFriend extends React.Component{

  state = {
    friend: {
    id:Date.now,
    name:'',
    age:'',
    email:''
    }
  }

    handleChange = e => {
        this.setState({
          friend:{
                ...this.state.friend,
                [e.target.name]:e.target.value
          }
              })

    }

    addFriend = e => {
        e.preventDefault()
        axiosWithAuth().post('/api/friends', this.state.friend)
        .then(
            res => {
                console.log(res)
            }

        )
        .catch(err=>{
            console.log(err)
        }

        )}

        render(){
          console.log(this.state.friend)
          return(
            <div>
              <form>
               <label>Name</label>
                <input 
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.friend.name}
                />
      <label>Age</label>
       <input 
         type="number"
        name="age"
        onChange={this.handleChange}
        value={this.state.friend.age}
        />
      <label>Email</label>
      <input 
        type="email"
          name="email"
         onChange={this.handleChange}
         value={this.state.friend.email}
    />
 <button onClick={() => this.addFriend}>Add Friend</button>
        
 </form>
</div>
          );}
      }

export default NewFriend;
// const initialState = {
//   id: Date.now(),
//   name: '',
//   age: '',
//   email: '',
// }
// export default function NewFriend () {
//   const [formValues, setFormValues] = useState(initialState)

//   const handleChange = e => {
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value
//     })
//   }

//   const addFriend = e => {
//     e.preventDefault();
//     axiosWithAuth().post("/api/friends")
//     .then(res => console.log(res))
//     const newFriend = {
//       id: Date.now(),
//       name: formValues.name,
//       age: formValues.age,
//       email: formValues.email,
//     }
//     setFormValues(newFriend);
//     setFormValues(initialState);
//   }
// console.log(formValues)
//   return (
//     <div>
//       <form>
//         <label>Name</label>
//           <input 
//           type="text"
//           name="name"
//           onChange={handleChange}
//           />
//         <label>Age</label>
//           <input 
//           type="number"
//           name="age"
//           onChange={handleChange}
//           />
//         <label>Email</label>
//           <input 
//           type="email"
//           name="email"
//           onChange={handleChange}
//           />
//         <button onClick={() => addFriend}>Add Friend</button>
        
//       </form>
//     </div>
//   )
// }
