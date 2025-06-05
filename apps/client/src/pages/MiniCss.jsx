import { useContext, useEffect, useCallback, memo } from "react";
import { MyContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Button } from "@mui/material";

const MiniCss = memo(() => {
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
    <div className="fixed inset-0 flex flex-col bg-[#111111] z-50">
      {/* Header with back button */}
      <div className="shadow-sm rounded-full my-4">
        <Button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 !bg-[#865dff] !text-slate-900"
          disableRipple
        >
          <TbArrowBackUpDouble className="text-2xl" />
          <span className="text-xl font-medium ">Back to Home</span>
        </Button>
      </div>

      {/* Full-page iframe */}
      <iframe
        src="https://shailendradev7.github.io/minicss/"
        title="MiniCss Website"
        className="flex-1 w-full border-0"
        allow="fullscreen"
        loading="eager"
      />
    </div>
  );
});

export default MiniCss;