import { Dashboard } from "@uppy/react";
import { motion } from "framer-motion";
import GoogleDrive from "@uppy/google-drive";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import Modal from "./Modal";
import Url from "@uppy/url";
import Tus from "@uppy/tus";
import XHRUpload from "@uppy/xhr-upload";

function UploadModal({ handleClose }) {
    const uppy = new Uppy();
    uppy.use(Webcam);
    uppy.use(Url, {
        companionUrl: "https://companion.uppy.io/",
        locale: {},
    });
    uppy.use(XHRUpload, {
        endpoint: "http://localhost:7060/upload/",
        fieldName: "my-file",
        method: "post",
        formData: true,
    });

    uppy.on("complete", (result) => {
        console.log(result);
    });

    return (
        <Modal handleClose={handleClose}>
            <div className="upload-modal">
                <div style={{ display: "none" }}>
                    <div className="modal-head"></div>
                    <div className="modal-close-btn">×</div>
                </div>
                <Dashboard
                    proudlyDisplayPoweredByUppy={false}
                    uppy={uppy}
                    width={650}
                    height={450}
                    plugins={["Webcam", "Url"]}
                />
            </div>
        </Modal>
    );
}

export default UploadModal;
