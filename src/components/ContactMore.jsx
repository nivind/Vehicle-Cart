import React from "react";

const ContactMore = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 107px)" }}>
      <div className="flex flex-col items-center justify-center pt-16">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 14v5m0-9V4m-6 7H4a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2zm10 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z"
              ></path>
            </svg>
            <span className="font-bold">Arun</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span className="font-bold">9339339334</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              ></path>
            </svg>
            <span className="font-bold">nnnn@gmail.com</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <a
              href="https://www.mappls.com/direction-from-current-location?-to-sri-vinayaka-digital-4k-cinema?@zdata=ZnJvbSs3Ny42OTg2NDA4JTJDMTIuOTU1ODgwNCUyQyUzQjc3LjY5ODY0MDglMkMxMi45NTU4ODA0JTJDK3RvKzc3LjY5OTI1OCUyQzEyLjk1NTcyMiUyQzEzY3RmZiUzQjc3LjY5OTQxMSUyQzEyLjk1NTc2MiUyQzEzY3RmZit2K3x8K2RyaXZpbmcrSW5kaWFAaW5kKw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black font-bold text-blue-600"
            >
              Location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMore;
