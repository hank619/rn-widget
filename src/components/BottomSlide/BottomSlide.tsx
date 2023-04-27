import { View } from '@ant-design/react-native';
import React, { useRef, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { Colors, Images } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface IBottomSlideProps {
  children: any;
  visible: boolean;
  dismiss: () => void;
  maxHeight?: number;
}

export default function BottomSlide(props: IBottomSlideProps) {
  const { visible, dismiss, children, maxHeight = 400 } = props;
  const [scrollOffset, setScrollOffset] = useState(0);
  const scrollRef = useRef(null);

  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      onSwipeComplete={dismiss}
      swipeDirection={['down']}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      backdropColor={Colors.mask}
      scrollTo={(p) => {
        // @ts-ignore
        scrollRef?.current?.scrollTo(p);
      }}
      scrollOffset={scrollOffset}
      propagateSwipe={true}
    >
      <View style={[
        {
          backgroundColor: Colors.white,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 20,
        }, {
          maxHeight: maxHeight
        }
      ]}
      >
        <View
          style={{alignSelf: 'flex-end', marginVertical: 20, marginRight: 20,}}
        >
          <TouchableOpacity
            onPress={dismiss}
          >
            <Image source={Images.delete}/>
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollRef}
          onScroll={(event) => {
            setScrollOffset(event.nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={16}
        >
          {children}
        </ScrollView>
      </View>
    </Modal>
  );
}