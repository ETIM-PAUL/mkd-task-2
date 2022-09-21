import { areEqual } from 'Utils/equalityChecks';
import React, { memo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TabContent } from 'Components/Tabs';

import { firstCompanyIdSelector } from 'Containers/Projects/selectors';
import { ContractForms } from 'Components/Forms/FormTabs';
import {
  contractFormsSelector,
  fetchingContractFormsSelector,
  // contractFormDeletedSelector,
  // selectedContractFormSelector,
} from '../selectors';
import {
  listContractForms,
  // setEmployeeSelected,
  deleteContractForm,
  // setDeletedContractForm,
} from '../actions';

const ContractFormsTabContainer = () => {
  const dispatch = useDispatch();

  // const { id: userId }: UserModel = useUser();

  const contractForms = useSelector(contractFormsSelector, areEqual);

  const firstCompanyId = useSelector(firstCompanyIdSelector, areEqual);
  // const { name } = useSelector(selectedContractFormSelector, areEqual);

  // const [selectedValue, setSelectedValue] = useState(0);

  // const contractFormDeleted = useSelector(contractFormDeletedSelector, areEqual);

  const fetching = useSelector(fetchingContractFormsSelector, areEqual);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // const [showDeletedToast, setShowDeletedToast] = useState(false);

  /* eslint-disable */
  const [empPhone, setEmpPhone] = useState(null);

  // API call
  const getContractForms = useCallback(async () => {
    await dispatch(listContractForms(firstCompanyId));
  }, [firstCompanyId]);

  useEffect(() => {
    getContractForms();
  }, [firstCompanyId]);

  // useEffect(() => {
  //   if (contractFormDeleted) {
  //     // reload employee list
  //     dispatch(listContractForms(firstCompanyId));

  //     // handle toast
  //     setShowDeletedToast(true);

  //     setTimeout(() => setShowDeletedToast(false), 1500);

  //     // reset deleted status
  //     dispatch(setDeletedContractForm(''));
  //   }
  // }, [contractFormDeleted, firstCompanyId, userId]);

  const setModalStatus = useCallback(() => {
    setIsModalOpen((isModalOpen: boolean) => !isModalOpen);
  }, []);

  const setDeleteModalStatus = useCallback(() => {
    setIsDeleteModalOpen((isDeleteModalOpen: boolean) => !isDeleteModalOpen);
  }, []);

  const modalCloseClick = useCallback(
    (e: any) => {
      e.preventDefault();
      setIsModalOpen(false);
      setIsDeleteModalOpen(false);
    },
    [isModalOpen, isDeleteModalOpen]
  );

  // const selectCardClick = useCallback((employee: any) => {
  //   setModalStatus();
  //   dispatch(setEmployeeSelected(employee));

  //   const [phoneObject] = employee.phones;
  //   if (phoneObject?.id) {
  //     setEmpPhone(phoneObject);
  //   }
  // }, []);

  //deleteCardClick should be passed to Edit Employee modal that contains Delete Button
  const deleteIconClick = useCallback((e: any) => {
    e.preventDefault();
    setDeleteModalStatus();
  }, []);

  const deleteEmployeeClick = useCallback((e: any) => {
    e.preventDefault();
    dispatch(deleteContractForm('344'));
    setIsDeleteModalOpen(false);
  }, []);

  const closeToast = useCallback((e: any) => {
    e.preventDefault();
    // setShowDeletedToast(false);
  }, []);
  // console.log({ contractForms });

  return (
    <TabContent key="tab-content-contract-people" id="contract-forms" className="show active position-relative">
      <ContractForms contractForms={contractForms} fetching={fetching} />

      {/* <DeleteCardModal
        id={id}
        title="form"
        // name={fullName}
        // deleteFormClick={deleteIconClick}
        isOpen={isDeleteModalOpen}
        modalCloseClick={modalCloseClick}
        onDeleteButtonClick={deleteEmployeeClick}
      /> */}
      {/* {contractFormDeleted && (
        <DeleteToast isDisplayed={showDeletedToast} message={`${name} Deleted`} closeToast={closeToast} />
      )} */}
    </TabContent>
  );
};

ContractFormsTabContainer.defaultProps = {};

const ContractFormsTabContainerMemo = memo(ContractFormsTabContainer, areEqual);

export { ContractFormsTabContainerMemo as ContractFormsTab };
