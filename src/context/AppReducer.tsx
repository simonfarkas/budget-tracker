export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomes: [...state, action.payload],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state, action.payload],
      };

    case "INCREASE_BUDGET":
      return {
        ...state,
        budget: state + action.payload,
      };

    case "DECREASE_BUDGET":
      return {
        ...state,
        budget: state - action.payload,
      };

    case "ADD_TOTAL_INCOMES":
      return {
        ...state,
        totalIncomes: state + action.payload,
      };

    case "ADD_TOTAL_EXPENSES":
      return {
        ...state,
        totalExpenses: state + action.payload,
      };

    default:
      return state;
  }
};
