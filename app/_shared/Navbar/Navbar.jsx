"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { usePathname } from "next/navigation";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

import {
  admissionSteps,
  academyAssets,
  academyRoutes,
  navLinks,
  programDropdown,
  programs,
  skillCourses,
  subjects,
} from "@/app/academy/data/academyData";


/* =========================================================
   ROUTE HELPERS
   ========================================================= */

const getRouteHash = (href) => {

  if (!href) {
    return "";
  }

  if (href.startsWith("/#")) {
    return href.slice(1);
  }

  if (href.startsWith("#")) {
    return href;
  }

  return "";

};


/* =========================================================
   CONTACT ROUTE

   Contact and every "Book a Demo" entry in this navbar
   intentionally resolve to the dedicated /contact page.

   This protects the navbar even if academyData.js still
   contains an older homepage hash for either item.
   ========================================================= */

const CONTACT_ROUTE =
  "/contact";


const resolveNavbarHref = (
  href,
  label = "",
) => {

  const normalizedLabel =
    String(label)
      .trim()
      .toLowerCase();


  if (
    normalizedLabel ===
      "contact" ||
    normalizedLabel.includes(
      "book a demo",
    ) ||
    normalizedLabel.includes(
      "book demo",
    )
  ) {

    return CONTACT_ROUTE;

  }


  return href;

};


export default function Navbar() {

  const pathname =
    usePathname();

  /* =========================================================
     REFERENCES
     ========================================================= */

  const navbarRef =
    useRef(null);

  const searchInputRef =
    useRef(null);


  /* =========================================================
     NAVBAR STATE
     ========================================================= */

  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);


  const [
    programOpen,
    setProgramOpen,
  ] = useState(false);


  const [
    searchOpen,
    setSearchOpen,
  ] = useState(false);


  const [
    searchQuery,
    setSearchQuery,
  ] = useState("");


  const [
    scrolled,
    setScrolled,
  ] = useState(false);



  const [
    activeHref,
    setActiveHref,
  ] = useState("#home");


  const [
    desktopMode,
    setDesktopMode,
  ] = useState(false);


  /* =========================================================
     RESPONSIVE MODE DETECTION
     ========================================================= */

  useEffect(() => {

    const mediaQuery =
      window.matchMedia(
        "(min-width: 1025px)",
      );


    const updateMode = () => {

      setDesktopMode(
        mediaQuery.matches,
      );


      /*
       * Prevent mobile menu state from
       * leaking into desktop layout.
       */

      if (mediaQuery.matches) {

        setMenuOpen(false);

      }

    };


    updateMode();


    mediaQuery.addEventListener(
      "change",
      updateMode,
    );


    return () => {

      mediaQuery.removeEventListener(
        "change",
        updateMode,
      );

    };

  }, []);


  /* =========================================================
     SEARCH INDEX
     =========================================================

     This provides REAL live navbar search.

     Search data is generated from the same centralized
     academyData.js file used by the website.

     That means future sections can easily become searchable.
     ========================================================= */

  const searchIndex = useMemo(() => [

    /* NAVIGATION */

    ...navLinks.map(
      (item) => ({
        label: item.label,
        href:
          resolveNavbarHref(
            item.href,
            item.label,
          ),
        category: "Navigation",
        keywords:
          `${item.label} navigation page`,
      }),
    ),


    /* PROGRAM DROPDOWN */

    ...programDropdown.map(
      (item) => ({
        label: item.label,
        href: item.href,
        category: "Program",
        keywords:
          `${item.label} program course`,
      }),
    ),


    /* MAIN PROGRAMS */

    ...programs.map(
      (item) => ({
        label: item.title,
        href:
          item.key === "academics"
            ? academyRoutes.academics
            : item.key === "skills"
              ? academyRoutes.skills
              : academyRoutes.programs,

        category: "Program",

        keywords:
          `${item.title} ${item.description}`,
      }),
    ),


    /* ACADEMIC SUBJECTS */

    ...subjects.map(
      (item) => ({
        label: item.label,
        href: academyRoutes.academics,
        category: "Academic Subject",
        keywords:
          `${item.label} o level igcse a level academic subject`,
      }),
    ),


    /* SKILL COURSES */

    ...skillCourses.map(
      (item) => ({
        label: item.label,
        href: academyRoutes.skills,
        category: "Skill Course",
        keywords:
          `${item.label} skills training course`,
      }),
    ),


    /* ADMISSION STEPS */

    ...admissionSteps.map(
      (item) => ({
        label: item.label,
        href: academyRoutes.admission,
        category: "Admission",
        keywords:
          `${item.label} admission registration enrollment`,
      }),
    ),


    /*
     * Extra useful aliases.
     */

    {
      label:
        "O Level / IGCSE & A Level",

      href:
        academyRoutes.academics,

      category:
        "Academics",

      keywords:
        "cambridge o level igcse a level school subjects academics",
    },


    {
      label:
        "Book a Demo Class",

      href:
        CONTACT_ROUTE,

      category:
        "Admissions",

      keywords:
        "demo trial class booking appointment register",
    },

  ], []);


  /* =========================================================
     SEARCH FILTER / RANKING
     ========================================================= */

  const searchResults =
    useMemo(() => {

      const normalized =
        searchQuery
          .trim()
          .toLowerCase();


      /*
       * Before typing, display useful
       * suggested searches.
       */

      if (!normalized) {

        return searchIndex
          .filter((item) =>
            [
              "Academics",
              "Skill Development",
              "O Level / IGCSE & A Level",
              "Book a Demo Class",
            ].includes(
              item.label,
            ),
          )
          .slice(0, 5);

      }


      const tokens =
        normalized
          .split(/\s+/)
          .filter(Boolean);


      return searchIndex
        .map((item) => {

          const label =
            item.label.toLowerCase();


          const category =
            item.category.toLowerCase();


          const keywords =
            item.keywords.toLowerCase();


          const haystack =
            `${label} ${category} ${keywords}`;


          let score = 0;


          /*
           * Exact label match gets
           * highest priority.
           */

          if (
            label === normalized
          ) {

            score += 15;

          }


          /*
           * Label contains complete query.
           */

          if (
            label.includes(
              normalized,
            )
          ) {

            score += 8;

          }


          /*
           * Keywords contain complete query.
           */

          if (
            haystack.includes(
              normalized,
            )
          ) {

            score += 4;

          }


          /*
           * Individual word matches.
           */

          tokens.forEach(
            (token) => {

              if (
                label.includes(
                  token,
                )
              ) {

                score += 3;

              } else if (
                haystack.includes(
                  token,
                )
              ) {

                score += 1;

              }

            },
          );


          return {
            ...item,
            score,
          };

        })
        .filter(
          (item) =>
            item.score > 0,
        )
        .sort(
          (a, b) =>
            b.score - a.score,
        )
        .slice(0, 7);

    }, [
      searchIndex,
      searchQuery,
    ]);


  /* =========================================================
     CLOSE NAVBAR INTERACTIONS
     ========================================================= */

  const closeAll = () => {

    setMenuOpen(false);

    setProgramOpen(false);

    setSearchOpen(false);

  };


  /* =========================================================
     NAVIGATION FUNCTION
     ========================================================= */

  const navigateTo = (
    href,
  ) => {

    if (!href) {
      return;
    }


    const hash =
      getRouteHash(
        href,
      );


    /*
     * HOME ROUTE
     *
     * If we are already on the homepage,
     * clicking the logo should scroll to the top.
     */

    if (
      href ===
        academyRoutes.home &&
      pathname ===
        academyRoutes.home
    ) {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });


      setActiveHref(
        "#home",
      );


      window.history.pushState(
        null,
        "",
        academyRoutes.home,
      );


      closeAll();

      return;

    }


    /*
     * HOMEPAGE SECTION LINKS
     *
     * On "/" we smooth-scroll without reloading.
     *
     * From "/registration" the exact same href
     * performs normal navigation back to the
     * homepage and then targets the hash.
     */

    if (
      hash &&
      pathname ===
        academyRoutes.home
    ) {

      const target =
        document.getElementById(
          hash.substring(1),
        );


      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });


        setActiveHref(
          hash,
        );


        window.history.pushState(
          null,
          "",
          hash,
        );

      }


      closeAll();

      return;

    }


    /*
     * PAGE NAVIGATION
     *
     * Handles /registration and also takes
     * registration-page users back to /#section.
     */

    window.location.href =
      href;


    closeAll();

  };


  /* =========================================================
     SCROLL STATE + ACTIVE NAVIGATION
     =========================================================

     This uses section positions rather than relying entirely
     on IntersectionObserver.

     It prevents incorrect active items such as Faculty being
     highlighted while the user is still at the Hero section.
     ========================================================= */

  useEffect(() => {

    let animationFrame = null;


    const updateNavigation =
      () => {

        animationFrame =
          null;


        const y =
          window.scrollY;

        setScrolled(
          y > 10,
        );



        /*
         * Registration is a separate page.
         * Homepage section highlighting should
         * only run while pathname === "/".
         */

        if (
          pathname !==
          academyRoutes.home
        ) {

          return;

        }


        if (y < 160) {

          setActiveHref(
            "#home",
          );

          return;

        }


        const navbarHeight =
          navbarRef.current
            ?.querySelector(
              ".sa-navbar__shell",
            )
            ?.offsetHeight || 80;


        const marker =
          y +
          navbarHeight +
          110;


        let current =
          "#home";


        navLinks.forEach(
          (item) => {

            const hash =
              getRouteHash(
                item.href,
              );


            if (!hash) {
              return;
            }


            const target =
              document.getElementById(
                hash.substring(1),
              );


            if (
              target &&
              target.offsetTop <=
                marker
            ) {

              current =
                hash;

            }

          },
        );


        setActiveHref(
          current,
        );

      };


    const requestUpdate =
      () => {

        if (
          animationFrame !== null
        ) {

          return;

        }


        animationFrame =
          window.requestAnimationFrame(
            updateNavigation,
          );

      };


    updateNavigation();


    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );


    window.addEventListener(
      "resize",
      requestUpdate,
    );


    return () => {

      window.removeEventListener(
        "scroll",
        requestUpdate,
      );


      window.removeEventListener(
        "resize",
        requestUpdate,
      );


      if (
        animationFrame !== null
      ) {

        window.cancelAnimationFrame(
          animationFrame,
        );

      }

    };

  }, [
    pathname,
  ]);


  /* =========================================================
     ESCAPE + CTRL/CMD + K
     ========================================================= */

  useEffect(() => {

    const onKeyDown =
      (event) => {

        /*
         * Escape closes any open UI.
         */

        if (
          event.key ===
          "Escape"
        ) {

          closeAll();

          return;

        }


        /*
         * Professional search shortcut.
         *
         * Windows:
         * CTRL + K
         *
         * Mac:
         * CMD + K
         */

        if (
          (
            event.ctrlKey ||
            event.metaKey
          ) &&
          event.key
            .toLowerCase() ===
            "k"
        ) {

          event.preventDefault();


          setMenuOpen(false);

          setProgramOpen(false);

          setSearchOpen(true);

        }

      };


    window.addEventListener(
      "keydown",
      onKeyDown,
    );


    return () => {

      window.removeEventListener(
        "keydown",
        onKeyDown,
      );

    };

  }, []);


  /* =========================================================
     SEARCH AUTOFOCUS
     ========================================================= */

  useEffect(() => {

    if (!searchOpen) {
      return;
    }


    const timeout =
      window.setTimeout(
        () => {

          searchInputRef
            .current
            ?.focus();

        },
        100,
      );


    return () =>
      window.clearTimeout(
        timeout,
      );

  }, [
    searchOpen,
  ]);


  /* =========================================================
     CLICK OUTSIDE
     ========================================================= */

  useEffect(() => {

    const onPointerDown =
      (event) => {

        if (
          navbarRef.current &&
          !navbarRef.current.contains(
            event.target,
          )
        ) {

          setProgramOpen(false);

          setSearchOpen(false);

        }

      };


    document.addEventListener(
      "pointerdown",
      onPointerDown,
    );


    return () => {

      document.removeEventListener(
        "pointerdown",
        onPointerDown,
      );

    };

  }, []);


  /* =========================================================
     MOBILE BODY SCROLL LOCK
     ========================================================= */

  useEffect(() => {

    document.body.classList.toggle(
      "is-menu-open",
      menuOpen,
    );


    return () => {

      document.body.classList.remove(
        "is-menu-open",
      );

    };

  }, [
    menuOpen,
  ]);


  /* =========================================================
     SEARCH SUBMIT
     ========================================================= */

  const handleSearchSubmit =
    (event) => {

      event.preventDefault();


      if (
        !searchResults.length
      ) {

        return;

      }


      navigateTo(
        searchResults[0].href,
      );


      setSearchQuery("");

    };


  /* =========================================================
     SEARCH RESULT CLICK
     ========================================================= */

  const selectSearchResult =
    (item) => {

      navigateTo(
        item.href,
      );


      setSearchQuery("");

    };


  /* =========================================================
     MOBILE MENU TOGGLE
     ========================================================= */

  const toggleMobileMenu =
    () => {

      setMenuOpen(
        (current) =>
          !current,
      );


      setSearchOpen(
        false,
      );


      setProgramOpen(
        false,
      );

    };


  /* =========================================================
     SEARCH TOGGLE
     ========================================================= */

  const toggleSearch =
    () => {

      setSearchOpen(
        (current) =>
          !current,
      );


      setMenuOpen(
        false,
      );


      setProgramOpen(
        false,
      );

    };


  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <>
      <header
        ref={navbarRef}
        className={[
          "sa-navbar",

          scrolled
            ? "sa-navbar--scrolled"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >

        {/* =================================================
            WEBSITE PREVIEW ANNOUNCEMENT

            The repeated visual groups are intentional.
            They create a seamless continuous marquee with no
            visible start/end gap between message cycles.
            The purple announcement bar stays sticky together with
            the main navbar while the page scrolls.
            No separator icon is used — the spacing alone keeps
            the strip clean and premium.
            ================================================= */}

        <div
          className="sa-navbar__announcement"
        >

          <div
            className="sa-navbar__announcement-marquee"
            aria-label="Website Preview — Home, Registration, Faculty, and Contact pages are now available. More pages coming soon."
          >

            <div
              className="sa-navbar__announcement-track"
              aria-hidden="true"
            >

              {Array.from({
                length: 6,
              }).map((
                _,
                index,
              ) => (

                <span
                  className="sa-navbar__announcement-loop"
                  key={index}
                >

                  <span className="sa-navbar__announcement-text">
                    Website Preview — Home, Registration, Faculty, and Contact pages are now available. More pages coming soon.
                  </span>

                </span>

              ))}

            </div>

          </div>

        </div>


        <div className="sa-navbar__shell">

          {/* =================================================
              LOGO / BRAND
              ================================================= */}

          <a
            href={academyRoutes.home}
            className="sa-navbar__brand"
            aria-label="Silver Academy home"
            onClick={(
              event,
            ) => {

              event.preventDefault();

              navigateTo(
                academyRoutes.home,
              );

            }}
          >

            <img
              src={
                academyAssets.logo
              }
              alt="Silver Academy"
            />

          </a>


          {/* =================================================
              COMPLETE DARK NAVIGATION SIDE
              ================================================= */}

          <div className="sa-navbar__dark">

            <div className="sa-navbar__dark-inner">

              {/* =============================================
                  MAIN NAVIGATION
                  ============================================= */}

              <nav
                id="main-navigation"
                className={[
                  "sa-navbar__nav",

                  menuOpen
                    ? "sa-navbar__nav--open"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-label="Main navigation"
              >

                {navLinks.map(
                  (item) => {

                    const resolvedHref =
                      resolveNavbarHref(
                        item.href,
                        item.label,
                      );


                    const itemHash =
                      getRouteHash(
                        resolvedHref,
                      );


                    const isContactItem =
                      resolvedHref ===
                        CONTACT_ROUTE;


                    const isActive =
                      isContactItem
                        ? pathname ===
                            CONTACT_ROUTE

                        : resolvedHref ===
                            academyRoutes.registration
                          ? pathname ===
                              academyRoutes.registration

                          : pathname ===
                              academyRoutes.home &&
                            itemHash ===
                              activeHref;


                    /* =========================================
                       PROGRAMS DROPDOWN ITEM
                       ========================================= */

                    if (
                      item.hasDropdown
                    ) {

                      return (
                        <div
                          key={
                            item.label
                          }
                          className={[
                            "sa-navbar__item",

                            "sa-navbar__item--programs",

                            programOpen
                              ? "is-open"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}

                          onMouseEnter={() => {

                            if (
                              desktopMode
                            ) {

                              setProgramOpen(
                                true,
                              );

                            }

                          }}

                          onMouseLeave={() => {

                            if (
                              desktopMode
                            ) {

                              setProgramOpen(
                                false,
                              );

                            }

                          }}

                          onBlur={(
                            event,
                          ) => {

                            if (
                              desktopMode &&
                              !event.currentTarget.contains(
                                event.relatedTarget,
                              )
                            ) {

                              setProgramOpen(
                                false,
                              );

                            }

                          }}
                        >

                          <button
                            type="button"
                            className={[
                              "sa-navbar__link",

                              isActive
                                ? "is-active"
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            aria-haspopup="menu"
                            aria-expanded={
                              programOpen
                            }
                            onClick={() => {

                              setProgramOpen(
                                (current) =>
                                  !current,
                              );


                              setSearchOpen(
                                false,
                              );

                            }}
                          >

                            <span>
                              {
                                item.label
                              }
                            </span>


                            <ChevronDown
                              size={15}
                              strokeWidth={2.4}
                              aria-hidden="true"
                            />

                          </button>


                          {/* =================================
                              PROFESSIONAL PROGRAM PANEL
                              ================================= */}

                          <div
                            className="sa-navbar__mega"
                            role="menu"
                          >

                            <div className="sa-navbar__mega-top">

                              <div className="sa-navbar__mega-heading">

                                <span>
                                  Programs
                                </span>


                                <strong>
                                  Choose your
                                  learning path.
                                </strong>

                              </div>


                              <button
                                type="button"
                                className="sa-navbar__mega-close"
                                aria-label="Close programs"
                                onClick={() =>
                                  setProgramOpen(
                                    false,
                                  )
                                }
                              >

                                <X
                                  size={17}
                                />

                              </button>

                            </div>


                            <div className="sa-navbar__mega-list">

                              {programDropdown.map(
                                (
                                  child,
                                  index,
                                ) => (

                                  <button
                                    key={
                                      child.label
                                    }
                                    type="button"
                                    role="menuitem"
                                    className="sa-navbar__mega-item"
                                    onClick={() =>
                                      navigateTo(
                                        child.href,
                                      )
                                    }
                                  >

                                    <span className="sa-navbar__mega-index">

                                      {String(
                                        index +
                                          1,
                                      ).padStart(
                                        2,
                                        "0",
                                      )}

                                    </span>


                                    <span className="sa-navbar__mega-item-content">

                                      <strong>
                                        {
                                          child.label
                                        }
                                      </strong>


                                      <small>

                                        {child.label ===
                                        "Academics"
                                          ? "O Level, IGCSE, A Level and academic preparation."

                                          : child.label ===
                                              "Skill Development"
                                            ? "Practical digital skills for future careers."

                                            : "Business and e-commerce focused learning."}

                                      </small>

                                    </span>


                                    <span className="sa-navbar__mega-arrow">

                                      <ArrowUpRight
                                        size={
                                          17
                                        }
                                      />

                                    </span>

                                  </button>

                                ),
                              )}

                            </div>


                            <button
                              type="button"
                              className="sa-navbar__mega-cta"
                              onClick={() =>
                                navigateTo(
                                  academyRoutes.programs,
                                )
                              }
                            >

                              <span>
                                Explore all programs
                              </span>


                              <ArrowRight
                                size={17}
                              />

                            </button>

                          </div>

                        </div>
                      );

                    }


                    /* =========================================
                       STANDARD NAV LINK
                       ========================================= */

                    return (
                      <div
                        key={
                          item.label
                        }
                        className="sa-navbar__item"
                      >

                        <a
                          href={
                            resolvedHref
                          }
                          className={[
                            "sa-navbar__link",

                            isActive
                              ? "is-active"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          onClick={(
                            event,
                          ) => {

                            event.preventDefault();

                            navigateTo(
                              resolvedHref,
                            );

                          }}
                        >

                          <span>
                            {
                              item.label
                            }
                          </span>

                        </a>

                      </div>
                    );

                  },
                )}

              </nav>


              {/* =============================================
                  RIGHT NAVBAR ACTIONS
                  ============================================= */}

              <div className="sa-navbar__actions">

                {/* ===========================================
                    SEARCH SYSTEM
                    =========================================== */}

                <div
                  className={[
                    "sa-navbar__search",

                    searchOpen
                      ? "is-open"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >

                  <button
                    type="button"
                    className="sa-navbar__search-trigger"
                    aria-label={
                      searchOpen
                        ? "Close website search"
                        : "Search Silver Academy"
                    }
                    aria-expanded={
                      searchOpen
                    }
                    onClick={
                      toggleSearch
                    }
                  >

                    {searchOpen ? (

                      <X
                        size={20}
                        strokeWidth={
                          2.3
                        }
                      />

                    ) : (

                      <Search
                        size={20}
                        strokeWidth={
                          2.3
                        }
                      />

                    )}

                  </button>


                  {/* =========================================
                      SEARCH PANEL
                      ========================================= */}

                  <div className="sa-navbar__search-panel">

                    <form
                      className="sa-navbar__search-form"
                      onSubmit={
                        handleSearchSubmit
                      }
                    >

                      <Search
                        className="sa-navbar__search-input-icon"
                        size={19}
                      />


                      <input
                        ref={
                          searchInputRef
                        }
                        type="search"
                        name="site-search"
                        value={
                          searchQuery
                        }
                        autoComplete="off"
                        placeholder="Search courses, subjects or admissions..."
                        aria-label="Search Silver Academy"

                        onChange={(
                          event,
                        ) =>
                          setSearchQuery(
                            event.target
                              .value,
                          )
                        }
                      />


                      {searchQuery ? (

                        <button
                          type="button"
                          className="sa-navbar__search-clear"
                          aria-label="Clear search"
                          onClick={() =>
                            setSearchQuery(
                              "",
                            )
                          }
                        >

                          <X
                            size={16}
                          />

                        </button>

                      ) : (

                        <kbd>
                          Ctrl K
                        </kbd>

                      )}

                    </form>


                    <div className="sa-navbar__search-body">

                      <div className="sa-navbar__search-title">

                        <span>

                          {searchQuery
                            ? "Search results"
                            : "Suggested"}

                        </span>


                        {searchQuery ? (

                          <small>

                            {
                              searchResults.length
                            }{" "}
                            result
                            {searchResults.length ===
                            1
                              ? ""
                              : "s"}

                          </small>

                        ) : null}

                      </div>


                      {searchResults.length ? (

                        <div className="sa-navbar__search-results">

                          {searchResults.map(
                            (
                              result,
                              index,
                            ) => (

                              <button
                                key={`${result.label}-${index}`}
                                type="button"
                                className="sa-navbar__search-result"
                                onClick={() =>
                                  selectSearchResult(
                                    result,
                                  )
                                }
                              >

                                <span className="sa-navbar__search-result-icon">

                                  <Search
                                    size={
                                      15
                                    }
                                  />

                                </span>


                                <span className="sa-navbar__search-result-copy">

                                  <strong>
                                    {
                                      result.label
                                    }
                                  </strong>


                                  <small>
                                    {
                                      result.category
                                    }
                                  </small>

                                </span>


                                <ArrowUpRight
                                  size={
                                    16
                                  }
                                />

                              </button>

                            ),
                          )}

                        </div>

                      ) : (

                        <div className="sa-navbar__search-empty">

                          <Search
                            size={24}
                          />


                          <strong>
                            No results found
                          </strong>


                          <span>
                            Try searching for
                            Academics, IGCSE,
                            Mathematics, Amazon
                            or Admissions.
                          </span>

                        </div>

                      )}

                    </div>

                  </div>

                </div>


                {/* ===========================================
                    MOBILE MENU BUTTON
                    =========================================== */}

                <button
                  type="button"
                  className={[
                    "sa-navbar__menu-trigger",

                    menuOpen
                      ? "is-open"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={
                    menuOpen
                      ? "Close navigation"
                      : "Open navigation"
                  }
                  aria-expanded={
                    menuOpen
                  }
                  aria-controls="main-navigation"
                  onClick={
                    toggleMobileMenu
                  }
                >

                  {menuOpen ? (

                    <X
                      size={22}
                    />

                  ) : (

                    <Menu
                      size={22}
                    />

                  )}

                </button>

              </div>

            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
          PAGE BACKDROP
          ===================================================== */}

      <button
        type="button"
        tabIndex={
          menuOpen ||
          searchOpen
            ? 0
            : -1
        }
        aria-label="Close navigation overlay"
        className={[
          "sa-navbar__backdrop",

          menuOpen ||
          searchOpen
            ? "is-visible"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={
          closeAll
        }
      />

    </>
  );
}