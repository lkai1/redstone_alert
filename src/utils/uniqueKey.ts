const getUniqueKey = (elementName: string, elementIndex: number) => {
  return `${new Date().getTime()}-${elementName}-${elementIndex}`;
};

export default getUniqueKey;
