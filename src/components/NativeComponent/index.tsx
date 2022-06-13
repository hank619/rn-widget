/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 11:08:08
 * @Description:
 */
import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';
const LINKING_ERROR =
  `The package 'rn-widget' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type RnWidgetProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnWidgetView';

export const RnWidgetView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnWidgetProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
