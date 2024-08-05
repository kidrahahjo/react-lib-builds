// Rollup should be able to treeshake other MUI modules out
// However it still reads all the modules.
// To speed up the build process, import from @mui/material/Button
import { Button } from "@mui/material";
// AGGrid needs to be modularized otherwise we get huge bundle size if we use ag-grid-react
import { AgGridReact } from "@ag-grid-community/react";
// plotly is HUGEEEEEEE. See https://github.com/plotly/react-plotly.js/issues/98 to optimize
// bundle size
// Importing here to test treeshaking abilities of react
import Plot from "react-plotly.js";

interface Props {
  name?: undefined;
}

const Greet = ({ name }: Props) => {
  console.log(AgGridReact);
  return (
    <div>
      {/* Adding a button just for the sake of using material-ui */}
      <Button />
      <div>Hello {name ?? "World!"}</div>
    </div>
  );
};

export default Greet;
