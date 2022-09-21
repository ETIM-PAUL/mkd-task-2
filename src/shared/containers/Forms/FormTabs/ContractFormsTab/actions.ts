/* eslint-disable */

import { handleApiRequest } from 'Utils/handleApiRequest';

export const CONTRACTS_API_ERRORS = 'CONTRACTS_API_ERRORS';
export const SET_CONTRACT_FORMS = 'SET_CONTRACT_FORMS';
export const FETCHING_CONTRACT_FORMS = 'FETCHING_CONTRACT_FORMS';
export const DELETE_CONTRACT_FORM = 'DELETE_CONTRACT_FORM';
export const CONTRACT_FORM_DELETED = 'CONTRACT_FORM_DELETED';

interface ActionTypes {
  CONTRACTS_API_ERRORS: any;
  SET_CONTRACT_FORMS: object;
  FETCHING_CONTRACT_FORMS: boolean;
  DELETE_CONTRACT_FORM: number;
  CONTRACT_FORM_DELETED: boolean;
}

interface MessageAction {
  type: keyof ActionTypes;
  payload: any;
}

export type contractsActionTypes = MessageAction;

// list the contract forms
export const listContractForms =
  (companyId: number) =>
  async (dispatch: any, _getState = null, utils: any) => {
    // we'll enable the spinner
    setFetchingContractForm(true);
    const response = await handleApiRequest(dispatch, utils.Api.get(`/companies/${companyId}/contract-forms`, {}));
    if (response?.data) {
      const data = response.data;
      dispatch({
        type: SET_CONTRACT_FORMS,
        payload: { data },
      });
    } else {
      // we'll disable the spinner if something goes wrong with the API
      setFetchingContractForm(false);
    }
  };

export const deleteContractForm =
  (contractId: string) =>
  async (dispatch: any, _getState = null, utils: any) => {
    // Ensure we have an id
    if (contractId) {
      const response = await handleApiRequest(dispatch, utils.Api.delete(`/contract-forms/${contractId}`, {}));
      if (typeof response === 'string') {
        dispatch(setDeletedContractForm(contractId));
      }
    }
  };

export const setFetchingContractForm = (value: boolean) => (dispatch) => {
  dispatch({
    type: FETCHING_CONTRACT_FORMS,
    payload: value,
  });
};

export const setDeletedContractForm =
  (value = '') =>
  async (dispatch: any) => {
    dispatch({
      type: CONTRACT_FORM_DELETED,
      payload: value,
    });
  };
