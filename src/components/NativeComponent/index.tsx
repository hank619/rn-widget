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
  `The package 'igloo-rn-widget' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type IglooRnWidgetProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'IglooRnWidgetView';

export const IglooRnWidgetView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<IglooRnWidgetProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
