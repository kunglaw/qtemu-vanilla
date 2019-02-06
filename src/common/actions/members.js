import axios from "axios"

export const updateMembers = (members = []) => {
    return {
        type:"MEMBERS_UPDATE",
        payload:{
            members:members,
        }
    }
}

export const fetchMembers = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {

        // console.log( " res ====> ",res.data )

         const members = res.data.map( item => {
           return {
             id: item.id,
             title: item.company.bs,
             name: item.name,
             avatar:""
           }
         })

          //console.log( data )
        //   this.setState({
        //      members 
        //   })

            dispatch(updateMembers(members))
        })
        .catch(err => {
          console.log(err)
        })
    }
}