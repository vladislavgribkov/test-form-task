import React from 'react';
import FormSelect from '../../../FormControls/FormSelect/FormSelect';
import {
  ApplicantIndividualCompanyPosition,
  useAllApplicantIndividualCompanyPositionsQuery
} from '../../../../../types/IGraphql';

const PositionSelect = () => {
  const { data, loading } = useAllApplicantIndividualCompanyPositionsQuery();

  return (
    <FormSelect<ApplicantIndividualCompanyPosition>
      defaultOptions={data?.applicantIndividualCompanyPositions?.data}
      name="positions"
      fullWidth
      loading={loading}
      textFieldProps={{ label: 'Position' }}
      multiple
    />
  );
};

export default PositionSelect;
