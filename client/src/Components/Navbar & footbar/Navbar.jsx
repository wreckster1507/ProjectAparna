import React, { useState } from "react";
import { Link } from "react-router-dom";
import Announcement from "../Home/Page Contents/Announcement";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAbout2DropdownOpen, setIsAbout2DropdownOpen] = useState(false);
  const [isSpacesDropdownOpen, setIsSpacesDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isDocumentsDropdownOpen, setIsDocumentsDropdownOpen] = useState(false);
  const [isSOPsDropdownOpen, setIsSOPsDropdownOpen] = useState(false);
  const [isHappeningsDropdownOpen, setIsHappeningsDropdownOpen] =
    useState(false);
  const [isMemberLoginDropdownOpen, setIsMemberLoginDropdownOpen] =
    useState(false);

  return (
    <>
      <header className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link to="/" className="block text-white">
                {/* Logo or home link */}
                <span className="sr-only">Home</span>
                Logo
              </Link>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* MOBILE VIEW DESIGN */}
            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 z-50 w-full bg-black p-5 overflow-y-auto max-h-screen">
                <div className="flex flex-col items-center space-y-2">
                  {/* Simple Links */}
                  <Link
                    to="/"
                    className="text-white w-full text-center block px-3 py-2 rounded-md text-base font-medium transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <div
                    onClick={() =>
                      setIsSpacesDropdownOpen(!isSpacesDropdownOpen)
                    }
                    className="w-full text-center block px-3 py-2 rounded-md text-base font-medium transition cursor-pointer"
                  >
                    <span className="text-white">About</span>
                  </div>
                  {isSpacesDropdownOpen && (
                    <div className="w-full bg-black">
                      <Link
                        to="/aboutus/AboutSociety"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Society
                      </Link>
                      <Link
                        to="/aboutus/ManagementCommitee"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Management Committee
                      </Link>
                      <Link
                        to="/aboutus/BlockRepresentaives"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Block Representatives
                      </Link>
                    </div>
                  )}
                  <div
                    onClick={() =>
                      setIsContactDropdownOpen(!isContactDropdownOpen)
                    }
                    className="w-full text-center block px-3 py-2 rounded-md text-base font-medium transition cursor-pointer"
                  >
                    <span className="text-white">Contact</span>
                  </div>
                  {isContactDropdownOpen && (
                    <div className="w-full bg-black">
                      <Link
                        to="/contact/directory"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Directory
                      </Link>
                      <Link
                        to="/contact/LocationMap"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Location Map
                      </Link>
                    </div>
                  )}

                  {/* Nested Dropdown Example: Documents */}
                  <div
                    onClick={() =>
                      setIsDocumentsDropdownOpen(!isDocumentsDropdownOpen)
                    }
                    className="w-full text-center block px-3 py-2 rounded-md text-base font-medium transition cursor-pointer"
                  >
                    <span className="text-white">Documents</span>
                  </div>
                  {isDocumentsDropdownOpen && (
                    <div className="w-full bg-black">
                      <Link
                        to="/documents/bye-laws"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Bye-Laws
                      </Link>
                      <Link
                        to="/documents/Rule-and-Guidelines"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Rules & Guidelines
                      </Link>
                      {/* SOPs Nested Dropdown */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSOPsDropdownOpen(!isSOPsDropdownOpen);
                        }}
                        className="px-3 py-2 text-white cursor-pointer"
                      >
                        SOPs
                      </div>
                      {isSOPsDropdownOpen && (
                        <div className="pl-4 bg-black">
                          <Link
                            to="/documents/SOP/maintenance-charges"
                            className="block text-white px-3 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Maintenance Charges
                          </Link>
                          <Link
                            to="/documents/SOP/move-in-move-out"
                            className="block text-white px-3 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Move In/Move Out
                          </Link>
                          <Link
                            to="/documents/id-card-vechicle"
                            className="block text-white px-3 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            ID Card & Vehicle
                          </Link>
                          <Link
                            to="/documents/SOP/interior-work"
                            className="block text-white px-3 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Interior Work
                          </Link>
                        </div>
                      )}
                      <Link
                        to="/documents/new-to-society"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        New to Society
                      </Link>
                      <Link
                        to="/documents/downloads"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Downloads
                      </Link>
                    </div>
                  )}
                  <div
                    onClick={() =>
                      setIsHappeningsDropdownOpen(!isHappeningsDropdownOpen)
                    }
                    className="w-full text-center block px-3 py-2 rounded-md text-base font-medium transition cursor-pointer"
                  >
                    <span className="text-white">Happenings</span>
                  </div>
                  {isHappeningsDropdownOpen && (
                    <div className="w-full bg-black">
                      <Link
                        to="/happenings/new-and-circulars"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        News & Circulars
                      </Link>
                      <Link
                        to="/happenings/photo-gallery"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Photo Gallery
                      </Link>
                    </div>
                  )}
                  <Link
                    to="/facilities"
                    className="text-white w-full text-center block px-3 py-2 rounded-md text-base font-medium transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Facilites
                  </Link>
                  <Link
                    to="/classifieds"
                    className="text-white w-full text-center block px-3 py-2 rounded-md text-base font-medium transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Classifiedes
                  </Link>
                  <div
                    onClick={() =>
                      setIsMemberLoginDropdownOpen(!isMemberLoginDropdownOpen)
                    }
                    className="w-full text-center block px-3 py-2 rounded-md text-base font-medium transition cursor-pointer"
                  >
                    <span className="text-white">Members Login</span>
                  </div>
                  {isMemberLoginDropdownOpen && (
                    <div className="w-full bg-black">
                      <Link
                        to="/bye-laddws"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Member Forum
                      </Link>
                      <Link
                        to="/bye-lawds"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Complaints
                      </Link>
                      <Link
                        to="/bye-ladws"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Feedback
                      </Link>
                      <Link
                        to="/bye-dlaws"
                        className="block text-white px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Post Classified
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* DESKTOP VIEW DESIGN */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition"
              >
                Home
              </Link>
              {/* drop down */}
              <div
                onMouseEnter={() => setIsSpacesDropdownOpen(true)}
                onMouseLeave={() => setIsSpacesDropdownOpen(false)}
                className="relative"
              >
                <p className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition flex items-center cursor-default">
                  About
                </p>
                {isSpacesDropdownOpen && (
                  <div className="absolute left-0 mt- w-48 bg-black text-white rounded-md shadow-lg z-20">
                    <Link
                      to="/aboutus/AboutSociety"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      About Society
                    </Link>
                    <Link
                      to="/aboutus/ManagementCommitee"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Management Committee
                    </Link>
                    <Link
                      to="/aboutus/BlockRepresentaives"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Block Representatives
                    </Link>
                    {/* end of dropdown */}
                  </div>
                )}
              </div>
              {/* Contact dropwdown */}
              <div
                onMouseEnter={() => setIsContactDropdownOpen(true)}
                onMouseLeave={() => setIsContactDropdownOpen(false)}
                className="relative"
              >
                <p className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition flex items-center cursor-default">
                  Contact
                </p>
                {isContactDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-48 bg-black text-white rounded-md shadow-lg z-20">
                    <Link
                      to="/contact/directory"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Directory
                    </Link>
                    <Link
                      to="/contact/LocationMap"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Location Map
                    </Link>
                    {/* end of dropdown */}
                  </div>
                )}
              </div>
              {/* end of dropwdown */}
              {/* Documents  Dropdown*/}
              <div
                onMouseEnter={() => setIsDocumentsDropdownOpen(true)}
                onMouseLeave={() => setIsDocumentsDropdownOpen(false)}
                className="relative"
              >
                <p className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition flex items-center cursor-default">
                  Documents
                </p>
                {isDocumentsDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-48 bg-black text-white rounded-md shadow-lg z-20">
                    <Link
                      to="/documents/bye-laws"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Bye-Laws
                    </Link>
                    <Link
                      to="/documents/Rule-and-Guidelines"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Rules & Guidelines
                    </Link>
                    <div
                      onMouseEnter={() => setIsSOPsDropdownOpen(true)}
                      onMouseLeave={() => setIsSOPsDropdownOpen(false)}
                      className="px-4 py-2 text-sm hover:bg-blue-600 hover:text-white relative cursor-pointer"
                    >
                      SOPs
                      {isSOPsDropdownOpen && (
                        <div className="absolute left-full top-0 mt-0 ml-0 w-48 bg-black text-white rounded-md shadow-lg z-20">
                          <Link
                            to="/documents/SOP/maintenance-charges"
                            className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                          >
                            Maintenance Charges
                          </Link>
                          <Link
                            to="/documents/SOP/move-in-move-out"
                            className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                          >
                            Move In/Move Out
                          </Link>
                          <Link
                            to="/documents/id-card-vechicle"
                            className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                          >
                            ID Card & Vehicle
                          </Link>
                          <Link
                            to="/documents/SOP/interior-work"
                            className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                          >
                            Interior Work
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      to="/documents/new-to-society"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      New to Society
                    </Link>
                    <Link
                      to="/documents/downloads"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Downloads
                    </Link>
                  </div>
                )}
              </div>
              {/* Hapenning DropDown */}
              <div
                onMouseEnter={() => setIsHappeningsDropdownOpen(true)}
                onMouseLeave={() => setIsHappeningsDropdownOpen(false)}
                className="relative"
              >
                <div className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition flex items-center cursor-default">
                  Happenings
                </div>
                {isHappeningsDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-48 bg-black text-white rounded-md shadow-lg z-20">
                    <Link
                      to="/happenings/new-and-circulars"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      News & Circulars
                    </Link>
                    <Link
                      to="/happenings/photo-gallery"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Photo Gallery
                    </Link>
                  </div>
                )}
              </div>

              {/* end of dropdown */}
              <Link
                to="/facilities"
                className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition"
              >
                Facilites
              </Link>
              <Link
                to="/classifieds"
                className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition"
              >
                Classifiedes
              </Link>
              {/* Member Login */}
              <div
                onMouseEnter={() => setIsMemberLoginDropdownOpen(true)}
                onMouseLeave={() => setIsMemberLoginDropdownOpen(false)}
                className="relative"
              >
                <p className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition flex items-center cursor-default">
                  Member Login
                </p>
                {isMemberLoginDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-48 bg-black text-white rounded-md shadow-lg z-20">
                    <Link
                      to="/featurecommingsoon"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Member Forum
                    </Link>
                    <Link
                      to="/featurecommingsoon"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Complaints
                    </Link>
                    <Link
                      to="/featurecommingsoon"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Feedback
                    </Link>
                    <Link
                      to="/featurecommingsoon"
                      className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    >
                      Post Classified
                    </Link>
                  </div>
                )}
              </div>

              {/* end dropdown */}
            </nav>
          </div>
        </div>
      </header>
      <Announcement />
    </>
  );
};

export default Navbar;
