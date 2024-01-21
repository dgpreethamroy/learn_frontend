import { format } from "timeago.js";
import React, { Component } from "react";
import { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Message({ message, self }) {
  let color = "";
  if (message.check == "No Hate and Offensive") {
    color = "btn_white";
  } else if (message.check == "Hate Speech") {
    color = "btn_white_text";
  } else {
    color = "btn_white_textr";
  }
  return (
    <>
      <li
        className={classNames(
          self !== message.sender ? "justify-start" : "justify-end",
          "flex"
        )}
      >
        <div>
          <div
            className={classNames(
              self !== message.sender
                ? `${color} dark:${color} bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700`
                : `bg-blue-600 dark:bg-blue-500 ${color}`,
              "relative max-w-xl px-4 py-2 rounded-lg shadow"
            )}
          >
            <span className="block font-normal ">{message.message}</span>
          </div>
          <span className="block text-sm text-gray-700 dark:text-gray-400">
            {format(message.createdAt)}
          </span>
        </div>
      </li>
    </>
  );
}
