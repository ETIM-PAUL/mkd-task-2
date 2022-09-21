import React, { memo } from 'react';

import { PurpleButton } from 'Components/Button/PurpleButton';

import { areEqual } from 'Utils/equalityChecks';
import { ContractsForms } from 'Components/Forms/Contracts';
import classes from './ContractFormsTabs.module.css';

interface Props {
  fetching: boolean;
  contractForms: any;
}

const ContractForms = ({ contractForms, fetching }: Props) => (
  <div className={classes.contractFormsContent}>
    <div className={`d-flex justify-content-start align-items-center ${classes.contentHeader}`}>
      <h2>Form Template</h2>
      <PurpleButton className={classes.inviteButton}>Add +</PurpleButton>
    </div>
    <ContractsForms contractForms={contractForms} fetching={fetching} />
  </div>
);

const ContractFormsMemo = memo(ContractForms, areEqual);

export { ContractFormsMemo as ContractForms };
