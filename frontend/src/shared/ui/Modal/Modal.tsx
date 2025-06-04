import React, {useCallback, useEffect, useRef} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as classes from './Modal.module.scss'
import {createPortal} from "react-dom";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const ANIMATION_TIME = 250
const Modal = (props: ModalProps) => {
    const {isOpen, onClose, children} = props;
    const [isClosing, setIsClosing] = React.useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const onCloseHandle = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, ANIMATION_TIME);
    }, [onClose]);
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandle()
        }
    }, [onCloseHandle])
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing
    }
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown])
    return createPortal(
        <div className={classNames(classes.Modal, mods, [])}>
            <div className={classes.overlay} onClick={onCloseHandle}>
                <div className={classes.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>, document.body
    );
};

export default Modal;