/* eslint-disable no-console */
import { TabContent } from 'Components/Tabs';
import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';

import { Spinner } from 'Components/Spinner';

import classes from './contractForms.module.css';
import { ContractFormsList } from '../ContractFormList';

interface Props {
  contractForms: any;
  fetching: boolean;
}

const ContractsForms = ({ contractForms, fetching }: Props) => (
  <TabContent key="tab-content-wip-contract-forms" id="contract-forms" className="show active position-relative">
    <div className={classes.contractContent}>
      {fetching && <Spinner loading />}
      {!fetching && <ContractFormsList contractForms={contractForms} />}
    </div>
  </TabContent>
);

const ContractFormsMemo = memo(ContractsForms, areEqual);

export { ContractFormsMemo as ContractsForms };
