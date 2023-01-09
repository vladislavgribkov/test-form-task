import CustomModal from '../../UI/CustomModal/CustomModal';
import AddNewItemForm from '../../Forms/FormTemplates/AddNewItemForm/AddNewItemForm';
import React, { FC, useCallback } from 'react';

const AddItemModal: FC<{
  open: boolean;
  setOpen(open: boolean): void;
  addOption(option: unknown): void;
}> = ({ open, setOpen, addOption }) => {
  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <CustomModal open={open} onClose={onClose}>
      <AddNewItemForm addOption={addOption} />
    </CustomModal>
  );
};

export default AddItemModal;
