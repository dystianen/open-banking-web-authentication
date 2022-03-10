import { Metrics } from "../../styles/Metric";

export const styles = {
  card: {
    minHeight: "100vh",
    backgroundColor: "#F6F6F6",
    borderRadius: Metrics.borderRadius,
    marginTop: "-10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nav2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navButton: {
    fontSize: "20px",
    color: "#71757C",
  },
};
