import React from "react";
import { Dropdown, Navlink } from "components";
import { NAV_CALLS_TO_ACTIONS, NAV_PRODUCTS } from "layouts/MainLayout/data";

const Navlinks = ({ navlinkClass }: { navlinkClass?: string }) => {
  return (
    <>
      <Navlink href="#" className={navlinkClass || ""}>
        Home
      </Navlink>
      <Navlink href="#" className={navlinkClass || ""}>
        Shop
      </Navlink>
      <Dropdown
        items={NAV_PRODUCTS}
        title="Products"
        callsToAction={NAV_CALLS_TO_ACTIONS}
        className={navlinkClass || ""}
      />

      <Navlink href="#" className={navlinkClass || ""}>
        Blog
      </Navlink>
      <Navlink href="#" className={navlinkClass || ""}>
        Contact us
      </Navlink>
    </>
  );
};

export default Navlinks;
