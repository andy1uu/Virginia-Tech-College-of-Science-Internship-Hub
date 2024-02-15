// API Key: pk.eyJ1IjoiYW5keWx1dSIsImEiOiJjbGdjeXNkZG4wMmt3M2xsaHJkOGMyMzBkIn0.ZWriv323SJ9YutidC-LfFA
import * as React from "react";
import { SearchBox } from "@mapbox/search-js-react";

const LocationAutocomplete = () => {
const [value, setValue] = React.useState('');
return (
  <form>
    <SearchBox accessToken="pk.eyJ1IjoiYW5keWx1dSIsImEiOiJjbGdjeXNkZG4wMmt3M2xsaHJkOGMyMzBkIn0.ZWriv323SJ9YutidC-LfFA" />
  </form>
);
};

export default LocationAutocomplete;
