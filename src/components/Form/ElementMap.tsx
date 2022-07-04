/*
 * @Author: Hong.Zhang
 * @Date: 2022-07-04 14:09:01
 * @Description: 
 */
import { Amount } from "../Amount";
import { Checkbox } from "../Checkbox";
import { DatePicker } from "../DatePicker";
import { Input } from "../Input";
import { RadioGroup } from "../RadioGroup";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
import { Upload } from "../Upload";

export const ElementMap: Record<string, any> = {
  Input: Input,
  Amount: Amount,
  TextArea: TextArea,
  Checkbox: Checkbox,
  RadioGroup: RadioGroup,
  Select: Select,
  DatePicker: DatePicker,
  Upload: Upload,
}