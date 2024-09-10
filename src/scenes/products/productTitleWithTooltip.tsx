import { Tooltip, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface ProductTitleWithTooltipProps {
  title: string;
}

const ProductTitleWithTooltip: React.FC<ProductTitleWithTooltipProps> = ({
  title,
}) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (titleRef.current) {
        setIsOverflowing(
          titleRef.current.scrollWidth > titleRef.current.clientWidth
        );
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [title]);

  return (
    <Tooltip title={isOverflowing ? title : ""} arrow>
      <Typography
        ref={titleRef}
        gutterBottom
        variant="h5"
        fontWeight="bold"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>
    </Tooltip>
  );
};

export default ProductTitleWithTooltip;
