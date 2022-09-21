/* eslint-disable camelcase */
import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';

import { Table, TableBody, TableColumn, TableHeader, TableRow, Th } from 'Components/Table';
import { formatDate } from 'Utils/helpers';
import { Icon } from 'Components/Icons';
// import { ContractsDataModal, ContractFormModal } from 'Containers/Forms/Modals/ContractsFormsModal';
import classes from './ContractFormList.module.css';

interface Props {
  contractForms: any;
}

const ContractFormsList = ({ contractForms }: Props) =>
  contractForms.length > 0 && (
    <Table className={`table ${classes.contractListWrapper}`}>
      <TableHeader>
        <TableRow>
          <Th>Template Name</Th>
          <Th>
            <span className={classes.thSpan} role="button" tabIndex={-1}>
              Date Created
            </span>
          </Th>
          <Th />
        </TableRow>
      </TableHeader>
      <TableBody>
        {contractForms.map(({ id, name, created_at }: any) => (
          <TableRow key={id}>
            <TableColumn dataId={id} className={classes.columnContent}>
              <p className={classes.name}>{name}</p>
            </TableColumn>
            <TableColumn dataId={id} className={classes.columnContent}>
              <p className={classes.numberAndDate}>{formatDate(created_at, 'PP')}</p>
            </TableColumn>
            <TableColumn>
              <Icon className={classes.trashBase} type="trash" />
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

const ContractFormsListMemo = memo(ContractFormsList, areEqual);

export { ContractFormsListMemo as ContractFormsList };
