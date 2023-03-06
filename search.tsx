import { GlobalStyles } from "@components/GlobalStyles";
import { LayoutMainColumn } from "@components/LayoutMainColumn";
import { Search } from "@components/Search/Search";

export default function Index() {
  return (
    <>
      <GlobalStyles />

      <LayoutMainColumn>
        <Search />
      </LayoutMainColumn>
    </>
  );
}
