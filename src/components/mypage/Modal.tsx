import { Margarine } from "next/font/google";
import React from "react";

interface ModalProps {
    onClose: () => void;
    onConfirm: () => void;
    children: React.ReactNode;
}

const modalTitleStyle = {
    textWeight: 500,
    textSize: '14px',
    textAlign: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '12px 90px 7px 90px',
    background: 'rgba(183, 187, 200, 1)',
    whiteSpace: 'nowrap'
} as React.CSSProperties;

const modalButtonStyle = {
    textWeight: 500,
    textSize: '12px',
    textAlign: 'center',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '1px solid rgba(183, 187, 200, 1)',
    background: "white",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center'
} as React.CSSProperties;

const modalChildrenStyle = {
    textWeight: 500,
    textSize: '14px',
    textAlign: 'center',
    padding: '15px 28px 7px 28px',
    borderLeft: '1px solid rgba(183, 187, 200, 1)',
    borderRight: '1px solid rgba(183, 187, 200, 1)'
} as React.CSSProperties;

const modalButtonItemStyle = {
    flex: '1',
    textAlign: 'center',
    padding: '10px 0px 7px 0px'
} as React.CSSProperties;

const modalStyle = {
    margin: '0px 78px'
} as React.CSSProperties;

const modalBackgroundStyle = {
    position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 2000,
} as React.CSSProperties

export function Modal(props: ModalProps) {
    return (
        <div
            style={modalBackgroundStyle}
        >
            <div
                style={modalStyle}
            >
                <p
                    style={modalTitleStyle}
                >
                    계정 신고
                </p>
                {React.Children.map(props.children, (child) => (
                    <p
                        style={{
                            ...modalChildrenStyle,
                            backgroundColor: 'white'
                        }}
                    >
                        {child}
                    </p>
                ))}
                <div
                    style={modalButtonStyle}
                >
                    <p
                        style={{
                            ...modalButtonItemStyle,
                            borderRight: '1px solid rgba(183, 187, 200, 1)'
                        }}
                        onClick={props.onClose}
                    >
                        취소
                    </p>
                    <p
                        style={modalButtonItemStyle}
                        onClick={props.onConfirm}
                    >
                        확인
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;