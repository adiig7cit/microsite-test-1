import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CollegeDescription = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="flex flex-col md:mx-12 lg:mr-12 justify-center p-4 h-fit md:mt-12 lg:mt-20 font-Outfit">
      <h2 className="font-semibold text-2xl md:text-3xl w-full md:w-fit px-2">
        Welcome to{" "}
        {window.location.pathname === "/ucla" && <span>UCLA Chat</span>}
        {window.location.pathname === "/su" && (
          <span>Seattle Law Chat</span>
        )}
        {window.location.pathname === "/stetson" && (
          <span>Stetson Law Chat</span>
        )}
        !
      </h2>
      {isSmallScreen ? (
        <p className="mt-4 px-2 text-lg">
          Welcome to{" "}
          {window.location.pathname === "/ucla" && <span>UCLA Chat</span>}
          {window.location.pathname === "/su" && (
            <span>Seattle Law Chat</span>
          )}
          {window.location.pathname === "/stetson" && (
            <span>Stetson Law Chat</span>
          )}
          ! Connect directly with our student ambassadors via WhatsApp and dive
          into UCLA Laws rich academic community. Whether youre a prospective
          student or preparing to join us, get your queries answered from those
          who know best. Start chatting, start discovering.
        </p>
      ) : (
        <p className="mt-4 px-2 text-lg md:text-xl">
          Your personal gateway into the vibrant community and academic
          excellence that is the hallmark of{" "}
          {window.location.pathname === "/ucla" && (
            <span>UCLA School of Law</span>
          )}
          {window.location.pathname === "/su" && (
            <span>Seattle University</span>
          )}
          {window.location.pathname === "/stetson" && (
            <span>Stetson University</span>
          )}.
          Connect directly with our student ambassadors via WhatsApp and dive{" "}
          into{" "}
          {window.location.pathname === "/ucla" && (
            <span>UCLA Law&rsquo;s</span>
          )}
          {window.location.pathname === "/su" && (
            <span>Seattle University Law&rsquo;s</span>
          )}
          {window.location.pathname === "/stetson" && (
            <span>Stetson University Law&rsquo;s</span>
          )}{" "}
          rich academic community. Whether you&rsquo;re a prospective student or
          preparing to join us, get your queries answered from those who know
          best. Start chatting, start discovering.
        </p>
      )}
    </div>
  );
};

export default CollegeDescription;
