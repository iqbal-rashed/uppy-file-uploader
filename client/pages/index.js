import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import UploadModal from "../components/UploadModal";

function HomePage() {
    const [uploaderOpen, setUploaderOpen] = useState(false);

    return (
        <div>
            <div className="main-container">
                <motion.button
                    onClick={() => setUploaderOpen(!uploaderOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="upload-btn"
                >
                    Open Uploader
                </motion.button>
            </div>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {uploaderOpen && (
                    <UploadModal handleClose={() => setUploaderOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default HomePage;
