import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.replace("/plane-crazy-power.html");
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif" }}>
      Loading Plane Crazy Engine Power Calculator…
    </div>
  );
};

export default Index;
