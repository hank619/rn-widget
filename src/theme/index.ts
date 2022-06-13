/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-02 18:29:26
 * @Description: 
 */
import { Colors } from './color';
import { Fonts } from './font';
import { Images } from './image';
import { TypeFaces } from './type-face';

function customTheme(theme: ThemeProps) {
  const { Colors: CustomColors, Fonts: CutomerFonts, Images: CustomFonts, TypeFaces: CustomTypeFaces } = theme;
  Object.assign(Colors, CustomColors);
  Object.assign(Fonts, CutomerFonts);
  Object.assign(Images, CustomFonts);
  Object.assign(TypeFaces, CustomTypeFaces);
}

interface ThemeProps {
  Colors?: object;
  Fonts?: object;
  Images?: object;
  TypeFaces?: object;
}

export {
  Colors,
  Fonts,
  Images,
  TypeFaces,
  customTheme,
}