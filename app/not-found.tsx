"use client";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mt-4">Page Not Found</p>
      <Button variant="outline" className="mt-6 cursor-pointer" onClick={() => window.history.back()}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
