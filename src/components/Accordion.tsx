"use client";
import React, { useState, ReactNode } from "react";
import styles from "./accordion.module.css";

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = "",
  titleClassName = "",
  contentClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      <button
        className={`${styles.accordionTitle} ${titleClassName} ${
          isOpen ? styles.open : ""
        }`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-label={
          typeof title === "string" ? title : "Toggle forecast details"
        }
      >
        {title}
        <span className={styles.accordionIcon} aria-hidden="true">
          Show
        </span>
      </button>
      <div
        className={`${styles.accordionContent} ${contentClassName} ${
          isOpen ? styles.open : ""
        }`}
        role="region"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
