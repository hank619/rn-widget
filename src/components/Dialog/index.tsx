/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-26 16:02:44
 * @Description: 
 */
import React from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FWButton } from "../Button/FWButton";
import styles from './style';

export function Dialog(props: DialogProps) {
  const { 
    visible, 
    dismiss, 
    style, 
    title, 
    content, 
    children, 
    okText, 
    cancelText, 
    onOk, 
    onCancel, 
    touchOutsideCancellable,
    titleStyle,
    contentStyle,
    okStyle,
    cancelStyle
  } = props;

  return (
    <Modal
      visible={visible}
      transparent
    >
      <TouchableWithoutFeedback onPress={() => touchOutsideCancellable && dismiss()}>
        <View style={[styles.modalContainer, style]}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
              {!!content && <Text style={[styles.content, contentStyle]}>{content}</Text>}
              <>
                {!content && children}
              </>
              {okText && <FWButton style={[styles.ok, okStyle]} type={'primary'} text={okText} onClick={() => {
                onOk && onOk();
                dismiss();
              }}/>}
              {cancelText && <FWButton style={[styles.cancel, cancelStyle]} type={'secondary'} text={cancelText} onClick={() => {
                onCancel && onCancel();
                dismiss();
              }}/>}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export interface DialogProps {
  visible: boolean;
  dismiss: () => void;
  style?: any;
  title?: string;
  titleStyle?: any;
  content?: string;
  contentStyle?: any;
  children?: React.ReactNode;
  okText?: string;
  okStyle?: any;
  cancelText?: string;
  cancelStyle?: any;
  onOk?: () => void;
  onCancel?: () => void;
  touchOutsideCancellable?: boolean;
}