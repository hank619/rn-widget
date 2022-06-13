/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-25 17:23:18
 * @Description: 
 */
import React from "react";
import { View, Text, Modal, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Images } from "../../theme";
import styles from "./style";

export function Preview(props: PreviewProps) {
  const { style, files,textStyle, titleStyle } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function navLeft() {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  }

  function navRight() {
    if (currentIndex === files.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  }

  function dismiss() {
    setShowModal(false);
  }
  
  function show() {
    setShowModal(true);
  }

  if (!files || files.length === 0) return (
    <Text style={styles.text}>
      -
    </Text>
  );

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>
        {`${files.length} ${files.length > 1 ? `files`: 'file'} attached`}
      </Text>
      <TouchableOpacity 
        style={styles.icon}
        onPress={show}
      >
        <Image source={Images.attachment}/>
      </TouchableOpacity>
      <Modal
        visible={showModal}
        transparent
      >
        <TouchableWithoutFeedback onPress={dismiss}>
          <View style={styles.modalContainer}>
            {/* TouchableWithoutFeedback without implementation of onPress is in order to ignore click event on image*/}
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={[styles.title, titleStyle]}>
                  {`${currentIndex+1}/${files.length}`}
                </Text>
                <View style={styles.bottomContainer}>
                  {/* navi left component */}
                  <TouchableOpacity 
                    style={currentIndex === 0 ? styles.navLeftContainerDisable: styles.navLeftContainer}
                    onPress={navLeft}
                    disabled={currentIndex === 0}
                  >
                    <Image style={styles.navLeft} source={Images.arrowUp}/>
                  </TouchableOpacity>

                  {/* image component */}
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: files[currentIndex]}} resizeMode={'contain'}/>
                    <TouchableOpacity style={styles.close} onPress={dismiss}>
                      <Image source={Images.close}/>
                    </TouchableOpacity>
                  </View>

                  {/* navi right component */}
                  <TouchableOpacity 
                    style={currentIndex === files.length - 1 ? styles.navRightContainerDisable: styles.navRightContainer}
                    onPress={navRight}
                    disabled={currentIndex === files.length - 1}
                  >
                    <Image style={styles.navRight} source={Images.arrowUp} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )

}

export interface PreviewProps {
  style?: any;
  textStyle?: any;
  titleStyle?: any;
  files: string[];
}