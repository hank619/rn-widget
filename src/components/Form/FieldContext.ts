/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-13 14:31:20
 * @Description: 
 */
import { createContext } from "react";
import type { FormInstance } from "./useForm";

const FiledContext = createContext<FormInstance|null>(null);

export default FiledContext;
