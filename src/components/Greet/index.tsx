interface Props {
  name?: undefined;
}

const Greet = ({ name }: Props) => {
  return <div>Hello {name ?? "World!"}</div>;
};

export default Greet;
