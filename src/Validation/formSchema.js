import * as yup from "yup";

const schema = yup.object().shape({
user: yup 
.string()
.trim()
.required("name is required")
.min(2, "name must be at least 2 characters"),

size: yup
.string()
.oneOf(['personal pan', 'medium','large','x-large']
   ,"You must Choose a pizza size"),







})

export default schema;
