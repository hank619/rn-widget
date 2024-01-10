/*
 * @Author: Hong.Zhang
 * @Date: 2022-07-04 14:09:01
 * @Description: 
 */
import { Checkbox } from "../Checkbox";
import { DatePicker } from "../DatePicker";
import { Input } from "../Input";
import { RadioGroup } from "../RadioGroup";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
import { Upload } from "../Upload";

export const ElementMap: Record<string, any> = {
  Input: Input,
  BankCard: Input.BankCard,
  Phone: Input.Phone,
  Password: Input.Password,
  Number: Input.Number,
  Amount: Input.Amount,
  TextArea: TextArea,
  Checkbox: Checkbox,
  RadioGroup: RadioGroup,
  Select: Select,
  DatePicker: DatePicker,
  Upload: Upload,
}