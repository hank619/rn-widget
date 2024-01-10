/*
 * @Author: Hong.Zhang
 * @Date: 2023-05-08 11:44:42
 * @Description: 
 */
import SimpleToast from 'react-native-simple-toast';

export default function Toast() {
  return null;
}

Toast.show = function(text: string) {
  SimpleToast.showWithGravity(text, SimpleToast.LONG, SimpleToast.CENTER);
}