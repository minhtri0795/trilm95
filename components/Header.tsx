"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
import { useTheme } from "next-themes";
import classNames from "classnames";
const navigation = [
  { href: "/", name: "Home" },
  { href: "/blog", name: "Blog" },
  { href: "/cheatsheets", name: "Cheatsheets" },
];
const Header = () => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { theme, setTheme } = useTheme();

  const onClickToggleDark = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <nav className="sticky top-0 z-10 p-4 pb-8 sm:pb-16 my-4 backdrop-blur md:px-0">
      <div className="max-w-2xl lg:max-w-3xl mx-auto  flex flex-row items-center">
        {navigation.map(({ href, name }, index) => (
          <Link
            key={href}
            href={href}
            className={classNames(" text-gray-900 dark:text-gray-100", {
              "ml-4 md:ml-8": index > 0,
            })}
          >
            {name}
          </Link>
        ))}
        <button
          className="ml-auto p-2 rounded bg-gray-50 dark:bg-gray-950"
          aria-label="Toggle Dark mode"
          onClick={onClickToggleDark}
        >
          {!isMounted ? (
            <BsCircle />
          ) : theme === "dark" ? (
            <FiSun />
          ) : (
            <FiMoon className="fill-current" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
