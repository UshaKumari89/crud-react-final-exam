const initialState = [{

id:0,
name: 'Anusha',
number:98707889
},
{
id:1,
name: 'Kabir',
number:987776
},

]

const contactReducer = (state = initialState, action) =>{


switch (action.type) {
   default:
        return state;
}}

export default contactReducer