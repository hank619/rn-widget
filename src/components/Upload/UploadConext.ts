/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-15 17:57:38
 * @Description: 
 */
import React from "react";
import type { UploadInstance } from "./Upload";

const UploadContext = React.createContext<UploadInstance|null>(null);

export default UploadContext;