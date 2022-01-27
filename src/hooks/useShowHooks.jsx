import { useState } from "react";

export const useShowHooks = () => {
  const [open, setOpen] = useState(false);
  const [showEmployees, setShowEmployees] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [conditionalButtonModal, setConditionalButtonModal] = useState(true);

  const conditionalRenderFalse = () => {
    setConditionalButtonModal(false);
  };
  const conditionalRenderTrue = () => {
    setConditionalButtonModal(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleShowEmployees = () => {
    setShowEmployees(true);
  };
  const handleHideEmployees = () => {
    setShowEmployees(false);
  };
  const handleShowProducts = () => {
    setShowProducts(true);
  };
  const handleHideProducts = () => {
    setShowProducts(false);
  };
  return {
    open,
    handleOpen,
    handleClose,
    showEmployees,
    handleShowEmployees,
    handleHideEmployees,
    conditionalRenderFalse,
    conditionalRenderTrue,
    conditionalButtonModal,
    handleShowProducts,
    handleHideProducts,
    showProducts
  };
};
