import React from "react";
import "./Profile.css";

import {
    useGetTagQuery,
  } from "../redux/Compa.WebAPI";
import { retry } from "@reduxjs/toolkit/query";
  
const TagName=({tagId})=>{
    const {data: tag, isLoading, error}=useGetTagQuery(tagId);
  if (isLoading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }
  console.log(tag)
  return(
    <div class="teg-profile">{tag.tagName}</div>
  )
}

export default TagName;