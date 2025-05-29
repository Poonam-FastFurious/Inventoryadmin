import { useEffect } from "react";

const SidebarMenuLogic = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const parentLi = target.parentElement;
      if (parentLi.classList.contains("submenu")) {
        e.preventDefault();

        const isOpen = target.classList.contains("subdrop");

        // Collapse all open submenus
        document.querySelectorAll("#sidebar-menu .submenu a.subdrop").forEach((el) => {
          el.classList.remove("subdrop");
          const subUl = el.nextElementSibling;
          if (subUl) subUl.style.display = "none";
        });

        // Toggle current submenu
        if (!isOpen) {
          target.classList.add("subdrop");
          const subUl = target.nextElementSibling;
          if (subUl) subUl.style.display = "block";
        }
      }
    };

    const menu = document.getElementById("sidebar-menu");
    menu?.addEventListener("click", handleClick);

    // Expand active submenu on load
    const activeLink = document.querySelector("#sidebar-menu ul li.submenu a.active");
    if (activeLink) {
      const trigger = activeLink.closest("li").querySelector("a");
      if (trigger) {
        trigger.classList.add("subdrop");
        const subUl = trigger.nextElementSibling;
        if (subUl) subUl.style.display = "block";
      }
    }

    return () => {
      menu?.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // logic only
};

export default SidebarMenuLogic;
