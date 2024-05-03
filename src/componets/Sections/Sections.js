import React, { useState } from "react";
import "./Sections.css";
import sectionsData from "./SectionsTitle";

export default function Sections() {
  const [selectedSection, setSelectedSection] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(sectionId);
    }
  };

  const isSelected = (sectionId) => {
    return sectionId === selectedSection ? "selected" : "";
  };

  return (
    <div className="sectionsStyle">
      <table>
        <tbody>
          {sectionsData.map((section) => (
            <tr key={section.id} className={isSelected(section.id)}>
              <td onClick={() => scrollToSection(section.id)}>
                {section.icon}
              </td>
              <td onClick={() => scrollToSection(section.id)}>
                {section.label}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
