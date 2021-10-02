import React, {useEffect, useState} from 'react';
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from "framer-motion";


const ErrorModel = ({errorMsg, visibility, onChangeVisibility}) => {
    let [isOpen, setIsOpen] = useState(visibility)

    const changeVisibilityHandler = () => {
        onChangeVisibility(false)
    };

    useEffect(() => {
        setIsOpen(visibility);
    }, [visibility])

    return (
        <AnimatePresence>
            {
                isOpen && (
                    <Dialog
                        static
                        as={motion.div}
                        open={isOpen}
                        onClose={changeVisibilityHandler}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed z-20 inset-0 overflow-y-auto ">
                        <Dialog.Overlay
                            className={"inset-0 bg-black opacity-60 fixed"}/>

                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0}}
                            className={"relative my-32 max-w-md mx-auto bg-red-100 rounded p-3"}>
                            <Dialog.Title
                                className={"font-bold text-lg text-red-400"}>
                                Error
                            </Dialog.Title>

                            <Dialog.Description>
                                <h1 className={"ml-7 mt-2"}>{errorMsg}</h1>
                            </Dialog.Description>

                            <div className={"grid place-items-end"}>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.9}}
                                    onClick={changeVisibilityHandler}
                                    className={"mr-10 p-1 px-4 border rounded-lg border-red-500 mt-3"}>
                                    Cancel
                                </motion.button>
                            </div>
                        </motion.div>
                    </Dialog>
                )
            }
        </AnimatePresence>
    );
};
export default ErrorModel;