import React from "react";
import { trackPhoneClick } from "@/utils/analytics";

/**
 * Tracked telephone link. Fires phone_click (intent to call, not a completed call).
 * Does not prevent or delay the native tel: action.
 */
export default function PhoneLink({
  phone,
  display = "",
  placement,
  className,
  children = null,
  ...rest
}) {
  const tel = String(phone).replace(/\D/g, "");

  const handleClick = () => {
    trackPhoneClick({ placement, phone: tel });
  };

  return (
    <a href={`tel:${tel}`} onClick={handleClick} className={className} {...rest}>
      {children ?? display}
    </a>
  );
}
