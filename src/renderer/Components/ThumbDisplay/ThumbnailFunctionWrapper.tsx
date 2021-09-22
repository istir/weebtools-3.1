import React from "react";
import IsLightMode from "../../libs/IsLightMode";
import Thumbnail, { ThumbnailProps } from "./Thumbnail";

/* -------------------------------------------------------------------------- */
/*                            HIGH ORDER COMPONENT                            */
/* -------------------------------------------------------------------------- */
/* ---------- https://reactjs.org/docs/higher-order-components.html --------- */
/* --- used for being able to call a hook (IsLightMode) in class component -- */

function ThumbnailFunctionWrapper(props: ThumbnailProps) {
  return <Thumbnail {...props} lightMode={IsLightMode()} />;
}

export default ThumbnailFunctionWrapper;
