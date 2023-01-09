import React from 'react';
import FormSelect from '../../../FormControls/FormSelect/FormSelect';
import {
  ApplicantIndividualCompanyRelation,
  useAllApplicantIndividualCompanyRelationsQuery
} from '../../../../../types/IGraphql';

const CompanySelect = () => {
  const { data, loading } = useAllApplicantIndividualCompanyRelationsQuery();

  return (
    <FormSelect<ApplicantIndividualCompanyRelation>
      defaultOptions={data?.applicantIndividualCompanyRelations?.data}
      name="company"
      fullWidth
      loading={loading}
      textFieldProps={{ label: 'Company' }}
    />
  );
};

export default CompanySelect;
