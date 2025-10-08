export const loadInstalledApps = () => {
  try {
    const data = localStorage.getItem("installedApps");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const saveInstalledApp = (app) => {
  const installed = loadInstalledApps();
  try {
    const isDuplicate = installed.some((p) => p.id === app.id);
    if (isDuplicate) return false;
    const updated = [...installed, app];
    localStorage.setItem("installedApps", JSON.stringify(updated));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const removeInstalledApp = (id) => {
  const installed = loadInstalledApps();
  try {
    const updated = installed.filter((p) => p.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  } catch (err) {
    console.log(err);
  }
};
