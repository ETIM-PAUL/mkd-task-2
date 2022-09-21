import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';
import { FormsTabMenu } from './FormTabs';

const FormContainer = () => <FormsTabMenu />;

const FormContainerMemo = memo(FormContainer, areEqual);

export { FormContainerMemo as FormContainer };
