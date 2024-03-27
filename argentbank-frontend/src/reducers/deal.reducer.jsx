// Define initial state for the deal details
const initialState = {
  dealDetails: {}, // Initial state with an empty object for deal details
};

// Reducer function to manage deal-related state changes
const dealReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add cases to handle different actions related to deals
    default:
      return state; // Return current state for unhandled actions
  }
};

export default dealReducer;
