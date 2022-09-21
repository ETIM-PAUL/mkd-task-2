/* eslint-disable */

export const contractFormsSelector = ({ contractsForms: { contractForms } }: any) => contractForms;
export const fetchingContractFormsSelector = ({ contractsForms: { fetchingContractForms: value = true } }: any) =>
  value;
export const selectedContractFormSelector = ({
  contractsForms: {
    selectedContractForm: { id = '', name = '' },
  },
}) => ({
  id,
  name,
});
export const contractFormDeletedSelector = ({ contractForms: { contractFormDeleted: value = '' } }: any) => value;
