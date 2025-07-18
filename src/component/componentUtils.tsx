interface dataStructure {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}


interface cardProps {
  cardItem: dataStructure;
}

const logosPath = import.meta.glob("../assets/images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

type tabIndex = {
  tabIndex: string;
}

export {dataStructure, cardProps, logosPath, tabIndex}