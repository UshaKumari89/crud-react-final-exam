
// initial state for the current state 
const initialState = [

  {
    id: 0,
    name: "Kabir",
    number: 7654321,
    email: "ka@gmail.com",
    position: "Frontend",
  },

  {
        id: 2,
        name: "Anusha",
        number: 1234567,
        email: "an@gmail.com",
        position: "Frontend",
      },
  {
        id: 3,
        name: "Raavi",
        number: 76575721,
        email: "ra@gmail.com",
        position: "Fullstack",
      },
      {
        id: 4,
        name: "Kashi",
        number: 76548541,
        email: "pa@gmail.com",
        position: "Backend",
      },
];


//add contact information to the contact form
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
      
    
    //update contact information to the contact form using map method....
      case "UPDATE_CONTACT":
      return state.map(contact => {
        if (contact.id === action.payload.id) {
          return {...contact, ...action.payload};
        }
        return contact;
      });
      
     //delete contact information to the contact form using filter function
      case "DELETE_CONTACT":
      return state.filter(contact => contact.id !== action.payload.id);
      
      
      
    default:
      return state;
  }
};

export default contactReducer;
