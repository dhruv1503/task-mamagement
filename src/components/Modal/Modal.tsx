import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import './Modal.css';

// Define the context and its type
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the main Modal props
interface ModalProps {
  children: ReactNode;
}

// Create the main Modal component
const Modal: FC<ModalProps> & {
  Trigger: FC<ModalTriggerProps>;
  Content: FC<ModalContentProps>;
  Header: FC<ModalSectionProps>;
  Body: FC<ModalSectionProps>;
  Footer: FC<ModalSectionProps>;
} = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Define props for the subcomponents
interface ModalTriggerProps {
  children: ReactNode;
}

interface ModalContentProps {
  children: ReactNode;
}

interface ModalSectionProps {
  children: ReactNode;
}

// Define the Trigger subcomponent
Modal.Trigger = ({ children }: ModalTriggerProps) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal.Trigger must be used within a Modal');
  }
  const { openModal } = context;
  return <button onClick={openModal}>{children}</button>;
};

// Define the Content subcomponent
Modal.Content = ({ children }: ModalContentProps) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal.Content must be used within a Modal');
  }
  const { isOpen, closeModal } = context;

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={closeModal} className="modal-close">
          Close
        </button>
      </div>
    </div>
  );
};

// Define the Header subcomponent
Modal.Header = ({ children }: ModalSectionProps) => {
  return <div className="modal-header">{children}</div>;
};

// Define the Body subcomponent
Modal.Body = ({ children }: ModalSectionProps) => {
  return <div className="modal-body">{children}</div>;
};

// Define the Footer subcomponent
Modal.Footer = ({ children }: ModalSectionProps) => {
  return <div className="modal-footer">{children}</div>;
};

export default Modal;