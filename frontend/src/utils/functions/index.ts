/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITableHeader } from "../../components/Tables/types";

type IndexedHeader = {
  [key: string]: ITableHeader;
};

type OrganizedItem = {
  [key: string]: any;
};

export function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}
export function stringAvatar(name: string) {
  if (!name.trim()) {
    return {
      sx: {
        bgcolor: "#ccc", // Cor padrão para nomes vazios
      },
      children: "?",
    };
  }

  const nameParts = name.trim().split(" ");
  return {
    sx: {
      bgcolor: stringToColor(name),
      fontFamily: "'Avenir', sans-serif !important",
    },
    children:
      nameParts.length > 1
        ? `${nameParts[0][0].toUpperCase()}${nameParts[1][0].toUpperCase()}`
        : nameParts[0][0].toUpperCase(),
  };
}

export function organizeData(
  data: any[],
  headers: ITableHeader[]
): [OrganizedItem[], IndexedHeader] {
  const indexedHeader: IndexedHeader = {};

  headers.forEach((header) => {
    indexedHeader[header.key] = {
      ...header,
    };
  });

  const headerKeysInOrder = Object.keys(indexedHeader);

  const organizedData = data?.map((item) => {
    const organizedItem: OrganizedItem = {};

    headerKeysInOrder.forEach((key) => {
      organizedItem[key] = item[key];
    });

    organizedItem.$original = item;

    return organizedItem;
  });

  return [organizedData, indexedHeader];
}
