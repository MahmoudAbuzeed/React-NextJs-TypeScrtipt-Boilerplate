import messages from "./messages";
import { FormattedMessage } from "react-intl";

const HomeComponent = () => {
  return (
    <>
      <FormattedMessage {...messages.header} />
    </>
  );
};

export default HomeComponent;
