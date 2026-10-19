import { r as h } from "./index-CiCrIMMp.js?v=profiles-v5";

export const DEFAULT_PROFILE_ID = "11111111-1111-4111-a111-111111111111";

const STORAGE_PROFILES_KEY = "forge_user_profiles";
const STORAGE_ACTIVE_ID_KEY = "forge_active_profile_id";

export function loadProfiles() {
  try {
    const raw = localStorage.getItem(STORAGE_PROFILES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (_) {}
  const initial = [{ id: DEFAULT_PROFILE_ID, name: "Neeraj", avatar: "N" }];
  saveProfiles(initial);
  return initial;
}

export function saveProfiles(profiles) {
  try {
    localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify(profiles));
  } catch (_) {}
}

export function loadActiveProfileId() {
  try {
    const id = localStorage.getItem(STORAGE_ACTIVE_ID_KEY);
    if (id) return id;
  } catch (_) {}
  return DEFAULT_PROFILE_ID;
}

export function saveActiveProfileId(id) {
  try {
    localStorage.setItem(STORAGE_ACTIVE_ID_KEY, id);
  } catch (_) {}
}

export function ProfileSwitcher({
  profiles = [],
  activeProfileId = DEFAULT_PROFILE_ID,
  onSwitchProfile,
  onAddProfile,
  onDeleteProfile
}) {
  const [open, setOpen] = h.useState(false);
  const [adding, setAdding] = h.useState(false);
  const [newName, setNewName] = h.useState("");
  const dropdownRef = h.useRef(null);

  const activeProfile =
    profiles.find((p) => p.id === activeProfileId) || profiles[0] || {
      id: DEFAULT_PROFILE_ID,
      name: "Neeraj",
      avatar: "N"
    };

  // Close dropdown on outside click
  h.useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
        setAdding(false);
        setNewName("");
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("touchstart", handleOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    const cleanName = newName.trim();
    const newProfile = {
      id: crypto.randomUUID(),
      name: cleanName,
      avatar: cleanName.charAt(0).toUpperCase()
    };
    onAddProfile(newProfile);
    setNewName("");
    setAdding(false);
    setOpen(false);
  };

  return h.createElement(
    "div",
    {
      ref: dropdownRef,
      style: { position: "relative", display: "inline-block" }
    },
    // Trigger Button
    h.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpen(!open),
        "aria-label": `Current profile: ${activeProfile.name}. Click to switch profiles`,
        title: `Profile: ${activeProfile.name}`,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          height: "36px",
          padding: "0 12px 0 6px",
          background: "var(--panel, #171a18)",
          border: "1px solid var(--line, #2a2d2a)",
          borderRadius: "999px",
          color: "var(--text, #f2f0e8)",
          fontSize: "13px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "border-color 0.15s ease, background 0.15s ease"
        }
      },
      // Avatar badge
      h.createElement(
        "span",
        {
          style: {
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#c8ff35",
            color: "#0b0d0c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "800",
            letterSpacing: "0.02em"
          }
        },
        activeProfile.avatar || "U"
      ),
      // Name
      h.createElement("span", { style: { maxWidth: "90px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, activeProfile.name),
      // Caret arrow
      h.createElement(
        "span",
        {
          style: {
            fontSize: "10px",
            color: "var(--muted, #8b9089)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.15s ease"
          }
        },
        "▼"
      )
    ),
    // Dropdown Modal Menu
    open &&
      h.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: "calc(100% + 8px)",
            right: "0",
            width: "230px",
            background: "#171a18",
            border: "1px solid #343834",
            borderRadius: "14px",
            padding: "8px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.75)",
            zIndex: 1000,
            animation: "fadeIn 0.15s ease"
          }
        },
        h.createElement(
          "div",
          {
            style: {
              padding: "6px 8px 8px 8px",
              borderBottom: "1px solid #2a2d2a",
              marginBottom: "6px"
            }
          },
          h.createElement(
            "span",
            {
              style: {
                fontSize: "10px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                color: "#8b9089",
                textTransform: "uppercase"
              }
            },
            "Switch Profile"
          )
        ),
        // Profiles List
        h.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: "2px", maxHeight: "180px", overflowY: "auto" } },
          profiles.map((p) => {
            const isCurrent = p.id === activeProfileId;
            return h.createElement(
              "div",
              {
                key: p.id,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 8px",
                  borderRadius: "8px",
                  background: isCurrent ? "rgba(200, 255, 55, 0.12)" : "transparent",
                  cursor: "pointer",
                  transition: "background 0.12s ease"
                },
                onClick: () => {
                  onSwitchProfile(p.id);
                  setOpen(false);
                }
              },
              h.createElement(
                "div",
                { style: { display: "flex", alignItems: "center", gap: "8px" } },
                h.createElement(
                  "span",
                  {
                    style: {
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: isCurrent ? "#c8ff35" : "#2a2d2a",
                      color: isCurrent ? "#0b0d0c" : "#f2f0e8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: "700"
                    }
                  },
                  p.avatar || p.name.charAt(0).toUpperCase()
                ),
                h.createElement(
                  "span",
                  {
                    style: {
                      fontSize: "13px",
                      fontWeight: isCurrent ? "700" : "500",
                      color: isCurrent ? "#c8ff35" : "#f2f0e8"
                    }
                  },
                  p.name
                )
              ),
              isCurrent
                ? h.createElement("span", { style: { color: "#c8ff35", fontSize: "14px" } }, "✓")
                : profiles.length > 1 &&
                    h.createElement(
                      "button",
                      {
                        type: "button",
                        title: `Remove ${p.name}`,
                        "aria-label": `Remove profile ${p.name}`,
                        onClick: (e) => {
                          e.stopPropagation();
                          if (window.confirm(`Remove profile "${p.name}"?`)) {
                            onDeleteProfile(p.id);
                          }
                        },
                        style: {
                          background: "none",
                          border: "none",
                          color: "#8b9089",
                          cursor: "pointer",
                          padding: "2px 6px",
                          fontSize: "12px"
                        }
                      },
                      "✕"
                    )
            );
          })
        ),
        // Add Profile Section
        h.createElement("div", {
          style: { borderTop: "1px solid #2a2d2a", marginTop: "6px", paddingTop: "6px" }
        }),
        !adding
          ? h.createElement(
              "button",
              {
                type: "button",
                onClick: () => setAdding(true),
                style: {
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 8px",
                  background: "transparent",
                  border: "none",
                  borderRadius: "8px",
                  color: "#c8ff35",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                  textAlign: "left"
                }
              },
              "+ Add profile"
            )
          : h.createElement(
              "form",
              { onSubmit: handleCreate, style: { display: "flex", gap: "6px", padding: "4px" } },
              h.createElement("input", {
                type: "text",
                placeholder: "Name (e.g. Alex)",
                value: newName,
                onChange: (e) => setNewName(e.target.value),
                autoFocus: true,
                maxLength: 20,
                style: {
                  flex: "1",
                  background: "#0b0d0c",
                  border: "1px solid #343834",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  color: "#f2f0e8",
                  fontSize: "12px"
                }
              }),
              h.createElement(
                "button",
                {
                  type: "submit",
                  style: {
                    background: "#c8ff35",
                    border: "none",
                    borderRadius: "6px",
                    color: "#0b0d0c",
                    padding: "4px 8px",
                    fontSize: "12px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }
                },
                "Add"
              )
            )
      )
  );
}
