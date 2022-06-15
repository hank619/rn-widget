export * from './components/Amount';
export * from './components/Input';
export * from './components/Phone';
export * from './components/DatePicker';
export * from './components/Select';
export * from './components/Button';
export * from './components/Upload';
export * from './components/TextArea';
export * from './components/Status';
export * from './components/Alert';
export * from './components/Preview';
export * from './components/Fold';
export * from './components/Dialog';
export * from './components/Checkbox';
export * from './components/RadioGroup';
export * from './components/Card';
export * from './components/Loading';
export * from './components/Step';
export * from './components/Form';
export { customTheme } from './theme';

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
