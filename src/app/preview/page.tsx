"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function PreviewContent() {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryData = searchParams.get("data");
    if (queryData) {
      try {
        setData(JSON.parse(queryData));
      } catch (error) {
        console.error("Invalid JSON data:", error);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center p-1">
      <div className="w-full p-6 flex flex-col relative">
        {/* Title - Always Visible */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
          Preview Imported Data
        </h2>

        {/* Table Container with Scrollable Body */}
        <div className="overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg max-h-[calc(100vh-10px)]">
          <table className="w-full border-collapse">
            {/* Sticky Header Below AppBar */}
            <thead className="sticky top-[0px] bg-primary text-white z-10 shadow-md">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">DOB</th>
                <th className="p-3 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all ${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  }`}
                >
                  <td className="p-3 text-gray-800 dark:text-gray-100">{row.Name}</td>
                  <td className="p-3 text-gray-800 dark:text-gray-100">{row.Phone}</td>
                  <td className="p-3 text-gray-800 dark:text-gray-100">{row.DOB}</td>
                  <td className="p-3 text-gray-800 dark:text-gray-100">{row.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sticky Bottom Buttons */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-900 w-full p-4 shadow-lg flex justify-center space-x-4">
          <Link href="/home" className="flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
            <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition">
              Upload More
            </button>
          </Link>
          <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark transition">
            Send Wishes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Preview() {
  return (
    <Suspense fallback={<div>Loading preview...</div>}>
      <PreviewContent />
    </Suspense>
  );
}
