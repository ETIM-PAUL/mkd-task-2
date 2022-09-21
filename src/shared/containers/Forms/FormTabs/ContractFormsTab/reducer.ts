/* eslint-disable no-console */
import { DELETE_CONTRACT_FORM, FETCHING_CONTRACT_FORMS, SET_CONTRACT_FORMS, contractsActionTypes } from './actions';

const initialState = {
  contractForms: [],
  selectedContractForm: {},
  fetchingContractForms: true,
  contractFormDeleted: '',
};

export const contractsFormsReducer = (state = initialState, action: contractsActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CONTRACT_FORMS: {
      interface form {
        id: string;
        name: string;
        // eslint-disable-next-line camelcase
        created_at: Date;
      }
      const contractForms = payload.data.map((item: form) => ({
        id: item?.id,
        name: item?.name,
        created_at: item?.created_at,
      }));
      return {
        ...state,
        contractForms,
        fetchingContractForms: false, // we'll hide the spinner once everything processed
      };
    }

    case FETCHING_CONTRACT_FORMS:
      return {
        ...state,
        fetchingContractForms: payload,
      };

    case DELETE_CONTRACT_FORM:
      return {
        ...state,
        contractFormDeleted: payload,
      };
    default:
      return state;
  }
};
