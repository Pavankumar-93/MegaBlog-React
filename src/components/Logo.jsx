import React from "react";

function Logo({ width = "55px" }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="public/images/8_1sasa11.jpg"
        alt="MegaBlog"
        style={{ width }}
        className="rounded-full"
      />

      <div>
        <h1 className="text-2xl font-bold text-blue-600">MegaBlog</h1>
        <p className="text-xs text-gray-500">Share • Learn • Inspire</p>
      </div>
    </div>
  );
}

export default Logo;
