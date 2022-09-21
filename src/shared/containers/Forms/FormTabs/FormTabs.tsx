import React, { memo } from 'react';

import { areEqual } from 'Utils/equalityChecks';

import { FormsTabMenu } from 'Components/Tabs';

import { ContractForms } from 'Containers/Forms/FormTabs';

const FormTabsContainer = () => (
  <FormsTabMenu id="form-tabs">
    <ContractForms />
  </FormsTabMenu>
);

FormTabsContainer.defaultProps = {};

const FormTabsContainerMemo = memo(FormTabsContainer, areEqual);

export { FormTabsContainerMemo as FormsTabMenu };
