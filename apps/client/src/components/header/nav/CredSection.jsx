import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const CredSection = () => {
  return (
    <div className="flex items-center me-1">
      <Link to="/admin/login">
        <Button
          variant="outlined"
          startIcon={<LoginIcon />}
          sx={{
            color: "primary.main", // Example: Text color is primary from theme
            // Example: Border color is primary from theme

            // Hover styles
            "&:hover": {
              color: "white", // Text color turns white on hover
              borderColor: "primary.main", // Border color turns white on hover
              // Or if you want a more subtle hover with a slight overlay:
              // backgroundColor: 'rgba(255, 255, 255, 0.1)', // A subtle white overlay
            },
          }}
        >
          Login
        </Button>
      </Link>
      <Link to="/admin/signup">
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "primary.main", // Example: Text color is primary from theme
            // Example: Border color is primary from theme

            // Hover styles
            "&:hover": {
              color: "white", // Text color turns white on hover
              borderColor: "primary.main", // Border color turns white on hover
              // Or if you want a more subtle hover with a slight overlay:
              // backgroundColor: 'rgba(255, 255, 255, 0.1)', // A subtle white overlay
            },
          }}
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default CredSection;
