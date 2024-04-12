function bindClass(...classes: any[]) {
  return classes.filter((item) => typeof item === 'string').join(' ');
}

export default bindClass;
