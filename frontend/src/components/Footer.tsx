import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 bg-gray-800 text-white">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;