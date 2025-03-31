"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as XLSX from "xlsx";

export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileUpload = (e:any) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setData(sheetData);
    };
    reader.readAsBinaryString(uploadedFile);
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-6">
          <h2 className="text-xl font-bold text-primary mb-4">
            Import Excel File
          </h2>
          <div className="border-2 border-dashed border-primary p-10 text-center cursor-pointer">
            <input
              type="file"
              accept=".xlsx, .xls"
              className="hidden"
              id="fileUpload"
              onChange={handleFileUpload}
            />
            <label htmlFor="fileUpload" className="cursor-pointer text-primary">
              {file ? file.name : "Click to Upload File"}
            </label>
          </div>
          {data.length > 0 && (
            <button
              onClick={() => {
                const queryString = new URLSearchParams({
                  data: JSON.stringify(data),
                }).toString();
                router.push(`/preview?${queryString}`);
              }}
              className="mt-4 w-full bg-primary text-white py-2 rounded-lg"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
