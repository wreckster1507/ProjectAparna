import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isDocumentsDropdownOpen, setIsDocumentsDropdownOpen] = useState(false);
  const [isHappeningsDropdownOpen, setIsHappeningsDropdownOpen] =
    useState(false);
  const [isMemberLoginDropdownOpen, setIsMemberLoginDropdownOpen] =
    useState(false);
  const [isSopDropdownOpen, setIsSopDropdownOpen] = useState(false);
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsContactDropdownOpen(false);
    setIsDocumentsDropdownOpen(false);
    setIsHappeningsDropdownOpen(false);
    setIsMemberLoginDropdownOpen(false);
    setIsSopDropdownOpen(false);
  };

  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsDocumentsDropdownOpen(false);
    setIsHappeningsDropdownOpen(false);
    setIsMemberLoginDropdownOpen(false);
  };

  const toggleDocumentsDropdown = () => {
    setIsDocumentsDropdownOpen(!isDocumentsDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsHappeningsDropdownOpen(false);
    setIsMemberLoginDropdownOpen(false);
  };

  const toggleHappeningsDropdown = () => {
    setIsHappeningsDropdownOpen(!isHappeningsDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsDocumentsDropdownOpen(false);
    setIsMemberLoginDropdownOpen(false);
  };

  const toggleMemberLoginDropdown = () => {
    setIsMemberLoginDropdownOpen(!isMemberLoginDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsDocumentsDropdownOpen(false);
    setIsHappeningsDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Home
          </Link>
          {/* About Dropdown */}
          <div
            className="relative inline-block text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            onMouseEnter={toggleAboutDropdown}
            onMouseLeave={toggleAboutDropdown}
          >
            <span>About</span>
            {isAboutDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
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
                  Management Commitee
                </Link>
                <Link
                  to="/aboutus/BlockRepresentaives"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                >
                  Block Representatives
                </Link>
              </div>
            )}
          </div>
          {/* Contact Dropdown */}
          <div
            className="relative inline-block text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            onMouseEnter={toggleContactDropdown}
            onMouseLeave={toggleContactDropdown}
          >
            <span>Contact</span>
            {isContactDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
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
              </div>
            )}
          </div>
          {/* Documents Dropdown */}
          <div
            className="relative inline-block text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            onMouseEnter={toggleDocumentsDropdown}
            onMouseLeave={toggleDocumentsDropdown}
          >
            <span>Documents</span>
            {isDocumentsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                <Link
                  to="/documents/bye-laws"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                >
                  Bye - Laws
                </Link>
                <Link
                  to="/documents/Rule-and-Guidelines"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                >
                  Rules & Guidelines
                </Link>
                <div
                  onMouseEnter={() => setIsSopDropdownOpen(true)}
                  onMouseLeave={() => setIsSopDropdownOpen(false)}
                >
                  <span className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white cursor-pointer">
                    SOP
                  </span>
                  {isSopDropdownOpen && (
                    <div className="absolute left-full top-0 mt-0 ml-0 w-48 bg-gray-700 text-white rounded-md shadow-lg">
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
                        Move In / Move Out
                      </Link>
                      <Link
                        to="/documents/id-card-vechicle"
                        className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                      >
                        ID Card & Vechicle
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
          {/* Happenings Dropdown */}
          <div
            className="relative inline-block text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            onMouseEnter={toggleHappeningsDropdown}
            onMouseLeave={toggleHappeningsDropdown}
          >
            <span>Happenings</span>
            {isHappeningsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
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
          {/* Facilities Link */}
          <Link
            to="/facilities"
            className="text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Facilities
          </Link>
          {/* Classifieds Link */}
          <Link
            to="/classifieds"
            className="text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Classifieds
          </Link>
          {/* Member Login Dropdown */}
          <div
            className="relative inline-block text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            onMouseEnter={toggleMemberLoginDropdown}
            onMouseLeave={toggleMemberLoginDropdown}
          >
            <span>Member Login</span>
            {isMemberLoginDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                <Link
                  to="/member/forum"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                >
                  Member Forum
                </Link>
                <Link
                  to="/member/complaints"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                >
                  Complaints
                </Link>
                <Link
                  to="/member/feedback"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                >
                  FeedBack
                </Link>
                <Link
                  to="/member/postclassified"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                >
                  Post Classified
                </Link>
              </div>
            )}
          </div>
        </div>

        <div>
          <img className="h-8 w-8 mt-2" src="/logo.svg" alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
