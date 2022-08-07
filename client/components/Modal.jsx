import React from "react";
import { motion } from "framer-motion";
import UploadModal from "./UploadModal";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, children }) => {
    return (
        <Backdrop handleClose={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {children}
            </motion.div>
        </Backdrop>
    );
};

const Backdrop = ({ children, handleClose }) => {
    return (
        <>
            <motion.div
                className="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal-background"
                onClick={handleClose}
            ></motion.div>
        </>
    );
};

export default Modal;
