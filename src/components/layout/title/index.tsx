import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import {PP, PPL} from '../../../assets'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={PP} alt="Refine" width="28px" />
        ) : (
          <img src={PPL} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
