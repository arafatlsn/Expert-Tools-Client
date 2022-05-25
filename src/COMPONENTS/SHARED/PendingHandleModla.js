import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const PendingHandleModla = ({ setShowModal, clcikAction, paymentStatus, cancelOrder }) => {

  return (
    <React.Fragment>
      <Modal
        show={true}
        size="md"
        popup={true}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header />
        <Modal.Body className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="green"
              disabled={paymentStatus === 'Not Paid'}
              onClick={() => {
                clcikAction()
                setShowModal(false)
              }}
            >
              Shipped
            </Button>
            <Button
            disabled={paymentStatus === 'Paid'}
              color="red"
              onClick={() => {
                setShowModal(false)
                cancelOrder()
              }}
            >
              Cancel Order
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default PendingHandleModla;