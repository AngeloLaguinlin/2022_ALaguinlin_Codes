import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Menu from "../components/Teacher/Menu/Menu";
import Home from "../components/Teacher/Home/Home";

import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

import Topics from "../components/Teacher/Topics/Topics";
import BrandLogo from "../components/NavBar/BrandLogo/BrandLogo";
import Search from '../components/NavBar/Search/Search';
import SecondaryMenu from '../components/NavBar/SecondaryMenu';

const TeacherLayout = (props) => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const { slug } = router.query;

  const angleDownIcon = (
    <FontAwesomeIcon
      icon={faAngleDown}
      size="lg"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading`}
    />
  );

  return (
    <>
      <div className="relative">
        <BrandLogo />
        <Search />
        <SecondaryMenu />
      </div>
      <div className="relative w-full flex flex-col box-border">
        <div className="relative flex flex-col box-border">
          <div className="relative flex flex-col min-h-content top-navbar-height box-border">
            <div className="relative flex flex-col min-h-content box-border">
              <div className="relative box-border min-h-content flex flex-row flex-nowrap items-stretch justify-center">
                <div className="box-border w-full max-w-full flex-nowrap items-start relative flex flex-row">
                  <div
                    className={`box-border overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10`}
                    >
                    <Menu />
                  </div>
                  {!slug && <Home />}
                  {slug && slug[0] != "courses" && <Home />}
                  {/* COURSES HOME */}
                  {slug && slug[0] == "courses" && <Topics />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherLayout;