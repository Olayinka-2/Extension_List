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

export {dataStructure, cardProps, logosPath}