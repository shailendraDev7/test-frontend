import { useContext, useEffect, useCallback, memo } from "react";
import { MyContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Button } from "@mui/material";

const CV = memo(() => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  
  const { setisHideHeaderAndFooter } = context;

  const toggleHeaderFooter = useCallback((isHide) => {
    setisHideHeaderAndFooter(isHide);
  }, [setisHideHeaderAndFooter]);

  useEffect(() => {
    toggleHeaderFooter(true);
    return () => toggleHeaderFooter(false);
  }, [toggleHeaderFooter]);

  return (
    <div className="fixed inset-0 flex flex-col">
      {/* Header with back button */}
      <div className="shadow-sm rounded-full my-4">
        <Button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 !text-gray-400"
          disableRipple
        >
          <TbArrowBackUpDouble className="text-2xl" />
          <span className="text-xl font-medium ">Back to Home</span>
        </Button>
      </div>

      {/* Full-page iframe */}
      <iframe
        src="https://shailendradev7.github.io/shailendrashrestha-cv/"
        title="MiniCss Website"
        className="flex-1 w-full border-0"
        allow="fullscreen"
        loading="eager"
      />
    </div>
  );
});

export default CV;