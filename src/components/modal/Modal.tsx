import React, { ReactNode } from 'react';
import { Modal as BaseModal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

import { ReactComponent as CloseIcon } from '../../assets/icons/modal-close.svg';
import './Modal.scss';

type Props = {
  children: ReactNode,
  modalVisible: boolean,
  setModalVisible: (state: boolean) => void
} & ModalProps;

const Modal = ({
  children, modalVisible, setModalVisible, ...rest
}: Props) => (
  <BaseModal
    visible={modalVisible}
    onCancel={() => setModalVisible(false)}
    footer={null}
    centered
    closeIcon={<CloseIcon />}
    {...rest}
  >
    {children}
  </BaseModal>
);

export default Modal;
